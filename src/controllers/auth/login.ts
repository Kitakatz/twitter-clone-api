import { Request, Response } from 'express';
import UserModel from '../../utils/users';
import bcrypt from 'bcryptjs'
import createCookie from '../../utils/createCookie';
import SessionModel from '../../utils/sessions';
import jwt from 'jsonwebtoken';
import { DateTime } from 'luxon';
import createFingerprint from '../../utils/createFingerprint';

interface DataToSign {
  id: string;
  createdAt: DateTime;
  fingerprint: any;
};

const login = async (request: Request, response: Response) => {
  try {
    const user = {...request.body};

    // Validate().validateUser(user);

    const model = new UserModel();
    const User = await model.getUser(user.username);

    if ( !User ) throw new Error('No user with that username exists.');
    
    if ( !await bcrypt.compare(user.password, User.password) ) throw new Error('Invalid password.');

    const sessionModel = new SessionModel();
    const Session = await sessionModel.create(User.id);

    const timeAsUTC = DateTime.now().toUTC();
    
    const fingerprint = createFingerprint(request);

    const dataToSign: DataToSign = {
      id: user.id,
      createdAt: timeAsUTC,
      fingerprint: fingerprint
    };

    const JWT_SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET:'';

    const accessToken = jwt.sign(dataToSign, JWT_SECRET, { expiresIn:'20s' });
    const refreshToken = jwt.sign(dataToSign, JWT_SECRET, { expiresIn:'7d'});

    createCookie(response, User, Session);
    
    response.send({
      authPayload: {
        accessToken: accessToken,
        refreshToken: refreshToken
      }
    });
  } catch(error: any) {
    console.log('Error: ', error);
    response.send({
      error: {
        message: error.message
      }
    });
  };
};

export default login;