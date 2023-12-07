import { Request, Response } from 'express';
import { DateTime } from 'luxon';
import createFingerprint from '../../utils/createFingerprint';
import jwt from 'jsonwebtoken';
import SessionModel from '../../utils/sessions';

interface DataToSign {
  id: string;
  createdAt: DateTime;
  fingerprint: any;
};

const refreshToken = async (request: Request, response: Response) => {
  try {
    //grab the sessionID off the token from the cookie
    const parsedCookie = JSON.parse(request.cookies.auth);
    const decodedToken = jwt.decode(parsedCookie.token);
    if (!decodedToken) return;
    
    //check refresh token with that in database
    const sessionModel = new SessionModel;
    // @ts-ignore
    const session = await sessionModel.get(decodedToken.sessionID);
    if (!session) throw new Error('Session expired. No longer exists.');

    const sessionTime: DateTime = DateTime.fromISO(session.timeToLive);
    const currentTime: DateTime = DateTime.now();
    //check if session time is still valid
    const isValid = sessionTime > currentTime; 
    //if session time expired ,remove session
    if(!isValid) {
      await sessionModel.delete(session.sessionID);
      throw new Error('Session time has expired. Client must request new credentials.');
    };
    
    const timeAsUTC = DateTime.now().toUTC();
    
    const fingerprint = createFingerprint(request);
    
    const dataToSign: DataToSign = {
      // @ts-ignore
      id: decodedToken.id,
      createdAt: timeAsUTC,
      fingerprint: fingerprint
    };
  
    const JWT_SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET:'';
    
    const accessToken = jwt.sign(dataToSign, JWT_SECRET, { expiresIn:'30m' });
    
    response.send({
      authPayload: {
        accessToken: accessToken
      }
    });

  } catch (error: any) {
    console.log(error);
    response.send({ 
      error: {
        message: error.message
      }
    })
  };
};

export default refreshToken;