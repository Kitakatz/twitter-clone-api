import { Request } from 'express';
import verifyFingerprint from '../utils/verifyFingerprint';

export default async (request: Request, response:any, next:any) => {
  try {
    const data = request.headers.authorization;
    const fingerprint = (request.headers['sec-ch-ua'] || '') + (request.headers['user-agent'] || '') + request.headers['sec-ch-ua-platform'] + request.headers['accept-language'];
    
    const accessToken = data?.split(' ')[1] || '';

    const isVerified = verifyFingerprint(accessToken, fingerprint);

    if (!isVerified) throw new Error('Client fingerprint does not match.') ;

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