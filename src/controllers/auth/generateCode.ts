import { Request, Response } from 'express';

const generateCode = (request: Request, response: Response) => {
  const randomNumber: number = Math.floor(100000 + Math.random() * 900000);
  
  response.send({
    message: `${randomNumber}`
  });
};

export default generateCode;