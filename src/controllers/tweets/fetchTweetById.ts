import { Tweet } from '../../schema/Tweet';
import TweetModel from '../../utils/tweets';
import { FetchTweetByIDRequest } from '../../types/request/FetchTweetByID';
import { FetchTweetByIDResponse } from '../../types/response/FetchTweetByID';

const fetchTweetById = async (request: FetchTweetByIDRequest, response: FetchTweetByIDResponse) => {
  try {
    const tweetRequest: Tweet = request.query;
    const model = new TweetModel;
    const tweet: Tweet = await model.getTweetByID(tweetRequest.id);

    response.send({
      tweet: tweet
    });
  } catch (error) {
    console.log(error);
  };
};

export default fetchTweetById;