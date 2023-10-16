require('dotenv').config();
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { mySQLConnection } from './utils/connect';
import MiddleWare from './middleware';

import { router as UserRouter } from './routes/user'; 
import { router as TweetsRouter } from './routes/tweets';
import { router as ReplyRouter } from './routes/replies';
import { router as LikesRouter } from './routes/likes';
import { router as AuthRouter } from './routes/auth';
// import SessionModel from './utils/sessions';

const main = async () => {
  const server = express();
  
  server.use(express.json());
  server.use(cookieParser());
  server.use(cors({ 
    credentials: true,
    origin: 'http://localhost:3000'
   }));
  
  const connection = await mySQLConnection();
  await connection.connect();

  server.use("/api/users", MiddleWare.verifyToken, UserRouter);
  server.use("/api/tweets", MiddleWare.verifyToken, TweetsRouter);
  server.use("/api/replies", MiddleWare.verifyToken, ReplyRouter);
  server.use("/api/likes", MiddleWare.verifyToken, LikesRouter);
  server.use("/api/auth", AuthRouter);

  server.get("/api/event-test", async (request, response) => {
    console.log('headers: ', request.headers);
    response.send('success!');
  });

  server.listen(3001, () => console.log('Server has started on port 3001'));
};

main();