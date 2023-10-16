import { Request } from 'express';
import { Tweet } from 'src/schema/Tweet';

/**
 * @endpoint fetchTweetById
 * @description Response data types or express for endpoint fetchTweetById.
 */

export type FetchTweetByIDRequest = Request<RequestParams, ResponseBody, RequestBody, RequestQuery>;

interface RequestParams { };
interface ResponseBody { };
interface RequestBody { };
interface RequestQuery extends Tweet { };