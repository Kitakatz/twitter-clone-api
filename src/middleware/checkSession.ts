import SessionModel from '../utils/sessions';
import jwt from 'jsonwebtoken';
import { DateTime } from 'luxon';

export default async (request:any, response:any, next:any) => {
  try {
    const parsedCookie = JSON.parse(request.cookies.auth);
    const decodedToken = jwt.decode(parsedCookie.token);

    // const body = request.body.sessionID ? request.body : request.que dry;
    const sessionModel = new SessionModel();
    //@ts-ignore
    const session = await sessionModel.get(decodedToken.sessionID);
  
    if(!session) throw new Error('Session expired. No longer exists.');

    const sessionTime: DateTime = DateTime.fromISO(session.timeToLive);
    const currentTime: DateTime = DateTime.now();

    //check if session token is still valid
    const isValid = sessionTime > currentTime;

    // if session time expired ,remove session
    if(!isValid) {
      await sessionModel.delete(session.sessionID);
      throw new Error('Session time has expired. Client must request new credentials.');
    };

    next();
  } catch (error: any) {
    console.log(error);
    response.send({ 
      error: {
        message: error.message
      }
    })
  };
};