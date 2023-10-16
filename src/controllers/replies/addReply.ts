import { Reply } from '../../schema/Tweet';
import { AddReplyRequest } from '../../types/request/AddReply';
import { AddReplyResponse } from '../../types/response/AddReply';
import ReplyModel from '../../utils/reply';

const addReply = async (request: AddReplyRequest, response: AddReplyResponse)=> {
  try {
    const body: Reply = request.body;
    const model = new ReplyModel();

    await model.create(body.id, body.author, body.tweet, body.likes, body.mediaURL, body.mediaType, body.tweetID);

    response.send({ 
      message: 'Success'
    });
  } catch (error: any) {
    console.log(error);
    response.send({
      error: {
        message: error.message
      }
    });
  };
};

export default addReply;