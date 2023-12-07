import { Tweet } from '../../schema/Tweet';
import { AddTweetRequest } from '../../types/request/AddTweet';
import { AddTweetResponse } from '../../types/response/AddTweet';
import TweetModel from '../../utils/tweets';

const addTweet = async (request: AddTweetRequest, response: AddTweetResponse) => {
  try {
    const body: Tweet = request.body;
    const model = new TweetModel();

    await model.create( body.id, body.author, body.tweet, body.likes );

    response.send("This endpoint is working.");
  } catch (error) {
    console.log(error);
    response.send("failure");
  };
};

export default addTweet;