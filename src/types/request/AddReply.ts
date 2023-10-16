import { Request } from 'express';
import { Reply } from '../../schema/Tweet';

/**
 * @endpoint addReply
 * @description Response data types or express for endpoint addReply.
 */

export type AddReplyRequest = Request<RequestParams, ResponseBody, RequestBody, RequestQuery>;

interface RequestParams { };
interface ResponseBody { };
interface RequestBody extends Reply { };
interface RequestQuery { };