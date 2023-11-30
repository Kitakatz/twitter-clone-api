import { Request, Response } from 'express';
import Validate from '../../utils/validate';
import UserModel from '../../utils/users';
import bcrypt from 'bcryptjs';
import createCookie from '../../utils/createCookie';
// import verify from './verify';
import SessionModel from '../../utils/sessions';

const register = async (request: Request, response: Response) => {
  try {
    const user = { ...request.body };

    Validate().validateUser(user);

    const model = new UserModel();
    const User = await model.getUser(user.username);

    // verify();

    if ( User ) throw new Error('That username is already taken.');

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(user.password, salt);

    await model.createUser(user, hashedPassword);


    //conundrum - do we want to create a session here or only when logging in
    // if we only create a session when loggin we can just redirect from register
    const sessionModel = new SessionModel();
    // await sessionModel.create(user.id);

    createCookie(response, User, sessionModel);
    
    response.send({
      message: "Success!"
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

export default register;