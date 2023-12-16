import { RowDataPacket } from 'mysql2';
import { Reply, Tweet } from '../../schema/Tweet';
import { mySQLConnection } from '../connect';

class TweetModel {
  async get(): Promise<Tweet[]> {
    const connection = await mySQLConnection();

    const [tweets] = await connection.query<Tweet[] & RowDataPacket[]>('SELECT * FROM tweet');
    
    const newList = await Promise.all(tweets.map(async tweet => {
      const [replies] = await connection.query<Reply[] & RowDataPacket[]>('SELECT * FROM reply WHERE reply.tweetID = ?', [tweet.id]);

      return {
        ... tweet,
        replies: replies
      };
    }));

    return newList;
  };

  async getTweetByID(id: string): Promise<Tweet> {
    const connection = await mySQLConnection();

    const [tweet] = await connection.query<Tweet[] & RowDataPacket[]>('SELECT * FROM tweet WHERE tweet.id = ?', [id]);
    const [replies] = await connection.query<Reply[] & RowDataPacket[]>('SELECT * FROM reply WHERE reply.tweetID = ?', [id]);

    return {
      ...tweet[0],
      replies: replies
    };
  };

  async create(id: string, author: string, tweet: string, likes: number, mediaURL: string, mediaType: string): Promise<void> {
    const connection = await mySQLConnection();
    
    await connection.query<Tweet[] & RowDataPacket[]>(
      `INSERT INTO tweet (id, author, tweet, likes, mediaURL, mediaType) VALUES( ?, ?, ?, ?, ?, ? )`, 
      [ id, author, tweet, likes, mediaURL, mediaType]
    );
  };

  async getLikes(id: string): Promise<number> {
    const connection = await mySQLConnection();

    const [tweet] = await connection.query<Tweet[] & RowDataPacket[]>(`SELECT * FROM tweet WHERE tweet.id = ?`, [id]);

    return tweet[0].likes;
  };

  async setLikes(id: string, likes: number): Promise<void> {
    const connection = await mySQLConnection();
    console.log('checking id: ', id);
    console.log('likes: ', likes);

    await connection.query(`UPDATE tweet SET likes = ? WHERE tweet.id = ?`, [likes, id]);
  };
};

export default TweetModel;