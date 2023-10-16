import { Request } from 'express';
import { Tweet } from '../../schema/Tweet';

/**
 * @endpoint addTweet
 * @description Response data types or express for endpoint addTweet.
 */

export type AddTweetRequest = Request<RequestParams, ResponseBody, RequestBody, RequestQuery>;

interface RequestParams { };
interface ResponseBody { };
interface RequestBody extends Tweet { };
interface RequestQuery { };