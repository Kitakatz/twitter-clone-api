import { RowDataPacket } from 'mysql2';
import { Reply } from '../../schema/Tweet';
import { mySQLConnection } from '../connect';

class ReplyModel {
  async create(id: string, author: string, tweet: string, likes: number, mediaURL: string, mediaType: string, tweetID: string): Promise<void> {
    const connection = await mySQLConnection();
    
    await connection.query<Reply[] & RowDataPacket[]>(
      `INSERT INTO reply (id, author, tweet, likes, mediaURL, mediaType, tweetID) VALUES( ?, ?, ?, ?, ?, ?, ? )`, 
      [ id, author, tweet, likes, mediaURL, mediaType, tweetID ]
    );
  };
};

export default ReplyModel;