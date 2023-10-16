import { Response } from 'express';

/**
 * @endpoint addTweet
 * @description Response data types or express for endpoint addTweet.
 */

export type AddTweetResponse = Response<ResponseBody>;

type ResponseBody = string;