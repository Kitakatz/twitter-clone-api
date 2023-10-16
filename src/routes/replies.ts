import Express from 'express';
import addReply from '../controllers/replies/addReply';
import MiddleWare from '../middleware';

const router = Express.Router();

router.post("/addReply", MiddleWare.checkSession, addReply);

export {
  router
};