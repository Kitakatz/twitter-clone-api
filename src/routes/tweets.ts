import Express from 'express';
import fetchTweetById from '../controllers/tweets/fetchTweetById';
import fetchTweets from '../controllers/tweets/fetchTweets';
import addTweet from '../controllers/tweets/addTweet';
import MiddleWare from '../middleware';

const router = Express.Router();

router.get("/fetchTweets", MiddleWare.checkSession, fetchTweets);
router.get("/fetchTweetById", MiddleWare.checkSession, fetchTweetById);
router.post("/addTweet", MiddleWare.checkSession, addTweet);

export {
  router
};