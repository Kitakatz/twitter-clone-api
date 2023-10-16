import { Response } from 'express';
import { User } from '../schema/User';
import jwt from 'jsonwebtoken';

interface DataToSign {
  id: string;
  sessionID: string;
  email: string;
  phone: string;
  role: string;
};

interface DataToSecure {
  token: string;
};

const JWT_SECRET = process.env.JWT_SECRET ? process.env.JWT_SECRET:'';

const createCookie = (response: Response, user: User, session: any): void => {
  const dataToSign: DataToSign = {
    id: user.id,
    sessionID: session.id,
    email: user.email,
    phone: user.phone,
    role: 'Subscriber'
  };
  
  const token = jwt.sign(dataToSign, JWT_SECRET);

  const dataToSecure: DataToSecure = {
    token: token
  };
  
  response.cookie('auth', JSON.stringify(dataToSecure), { 
    httpOnly: true,
    sameSite: true
  });
};

export default createCookie;