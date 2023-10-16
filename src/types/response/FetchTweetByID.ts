import { Response } from 'express';
import { Tweet } from '../../schema/Tweet';

/**
 * @endpoint fetchTweetByID
 * @description Response data types or express for endpoint fetchTweetByID.
 */

export type FetchTweetByIDResponse = Response<ResponseBody>;

interface ResponseBody {
  tweet: Tweet
};