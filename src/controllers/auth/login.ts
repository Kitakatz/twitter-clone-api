import { Request, Response } from 'express';
import UserModel from '../../utils/users';
import bcrypt from 'bcryptjs'
import createCookie from '../../utils/createCookie';
import SessionModel from '../../utils/sessions';
import jwt from 'jsonwebtoken';
import { DateTime } from 'luxon';
import createFingerprint from '../../utils/createFingerprint';
// import Validate from '../../utils/validate';

interface DataToSign {
  id: string;
  createdAt: DateTime;
  fingerprint: any;
};

const login = async (request: Request, response: Response) => {
  try {
    const user = {...request.body};

    //fix validate function!
    // Validate().validateUser(user);

    const model = new UserModel();
    const User = await model.getUser(user.username);

    if ( !User ) throw new Error('No user with that username exists.');
    
    if ( !await bcrypt.compare(user.password, User.password) ) throw new Error('Invalid password.');

    const timeAsUTC = DateTime.now().toUTC();
    const fingerprint = createFingerprint(request);
    const dataToSign: DataToSign = {
      id: user.id,
      createdAt: timeAsUTC,
      fingerprint: fingerprint
    };
    //revert expired to 20s or dont commit this
    const JWT_SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET:'';
    const accessToken = jwt.sign(dataToSign, JWT_SECRET, { expiresIn:'30m' });
    const refreshToken = jwt.sign(dataToSign, JWT_SECRET, { expiresIn:'7d' });

    const sessionModel = new SessionModel();
    console.log('REEEEEEFRESH TOKEN: ', refreshToken);
    const Session = await sessionModel.create(User.id, refreshToken);

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