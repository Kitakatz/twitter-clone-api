import { Response } from 'express';
import { Tweet } from '../../schema/Tweet';

/**
 * @endpoint fetchTweets
 * @description Response data types or express for endpoint fetchTweets.
 */

export type FetchTweetsResponse = Response<ResponseBodySuccess | ResponseBodyError>;

interface ResponseBodyError {
  error: {
    message: string;
  };
};

interface ResponseBodySuccess {
  tweets: Tweet[];
};