import { Response } from 'express';

/**
 * @endpoint addReply
 * @description Response data types or express for endpoint addReply.
 */

export type AddReplyResponse = Response<ResponseBody>;

interface Success {
  message: string;
};

interface Error {
  error: {
    message: string;
  };
};

type ResponseBody = Success | Error;