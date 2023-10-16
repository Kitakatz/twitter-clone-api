import SessionModel from '../utils/sessions';
import jwt from 'jsonwebtoken';

export default async (request:any, response:any, next:any) => {
  try {
    const parsedCookie = JSON.parse(request.cookies.auth);
    const decodedToken = jwt.decode(parsedCookie.token);
    console.log('decoded token: ', decodedToken);

    // const body = request.body.sessionID ? request.body : request.que dry;
    const sessionModel = new SessionModel();
    //@ts-ignore
    const session = await sessionModel.get(decodedToken.sessionID);
    console.log('session: ', session);
  
    if(!session) throw new Error('Session expired. No longer exists.');
  
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