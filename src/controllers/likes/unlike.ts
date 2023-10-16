import { Request, Response } from 'express';
import TweetModel from '../../utils/tweets';

const unlike = async (request: Request, response: Response ) => {
  try {
    const id: any = request.body.id || request.query.id;

    const model = new TweetModel();
    let likes = await model.getLikes(id);
    likes--;
    await model.setLikes(id,likes);

    response.send("Successful.");
  } catch {
    response.send("Error");
  };
};

export default unlike;