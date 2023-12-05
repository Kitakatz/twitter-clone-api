import { Request, Response } from 'express';
import TweetModel from '../../utils/tweets';

const fetchLikes = async (request: Request, response: Response) => {
  const id: any = request.body.id || request.query.id;
  console.log('fetchLikes body.id', id);

  const model = new TweetModel();
  const likes = await model.getLikes(id);

  response.send({likes: likes});
};

export default fetchLikes;