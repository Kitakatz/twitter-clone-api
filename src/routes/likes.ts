import Express from 'express';
import fetchLikes from '../controllers/likes/fetchLikes';
import like from '../controllers/likes/like';
import unlike from '../controllers/likes/unlike';
import MiddleWare from '../middleware';

const router = Express.Router();

router.get("/fetchLikes", MiddleWare.checkSession, fetchLikes);
router.post("/like", MiddleWare.checkSession, like);
router.post("/unlike", MiddleWare.checkSession, unlike);

export {
  router
};