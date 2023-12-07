import { Request, Response } from 'express';
import TweetModel from '../../utils/tweets';

const like = async (request: Request, response: Response ) => {
  try {
    const id: any = request.body.id || request.query.id;
    console.log('id for likes: ', id);

    const model = new TweetModel();
    let likes = await model.getLikes(id);
    console.log('likes: ', likes);
    likes++;
    await model.setLikes(id,likes);

    response.send("Successful.");
  } catch(error:any) {
    console.log(error);
    response.send({ 
      error: {
        message: error.message
      }
    });
  };
};

export default like;