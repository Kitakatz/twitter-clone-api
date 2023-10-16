import { Request, Response } from 'express';
import UserModel from '../../utils/users';
import { User } from '../../schema/User';

const addUser = async (request: Request, response: Response) => {
  try {
    const body: User = request.body;

    const model = new UserModel();
    await model.createUser(body.id, body.firstName, body.lastName, body.email, body.phone, body.username, body.password);

    response.send({
      message: "It worked! Your new user was created successfully."
    });
  } catch (error: any) {
    console.log(error);
    response.send({
      error: {
        message: error.message
      }
    });
  };
};

export default addUser;