import { Tweet } from '../../schema/Tweet';
import { FetchTweetsResponse } from '../../types/response/FetchTweets';
import TweetModel from '../../utils/tweets';
import { Request } from 'express';

const fetchTweets = async (_: Request, response: FetchTweetsResponse) => {
  try {
    //review the whole path of the cookie 
    //follow it through its routes
    //checking time access token was created

    const model = new TweetModel();
    const tweets: Tweet[] = await model.get();

    response.send({ tweets: tweets });
  } catch (error: any) { 
    console.log(error);
    response.send({ 
      error: {
        message: error.message
      }
    })
  };
};

export default fetchTweets;