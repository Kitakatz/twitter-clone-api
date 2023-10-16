import { Request, Response } from 'express';

const verify = (request: Request, response: Response) => {
  try {
    const code: string = request.body.code;

    if (code !== '123456') throw new Error('This code has expired or is invalid.');

    response.send({
      message: 'Successful'
    });
  } catch(error: any) {
    response.send({
      error: {
        message: error.message
      }
    })
  };
};

export default verify;