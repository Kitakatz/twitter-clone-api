import { Request, Response } from 'express';
import TweetModel from '../../utils/tweets';

const fetchLikes = async (request: Request, response: Response) => {
  try{
    const id: any = request.body.id || request.query.id;

    const model = new TweetModel();
    const likes = await model.getLikes(id);
  
    response.send({likes: likes});
  } catch(error: any) {
    console.log(error);
    response.send({
      error: {
        message: error.message
      }
    });
  };
};

export default fetchLikes;