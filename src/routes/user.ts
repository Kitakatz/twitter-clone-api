import Express from 'express';
import addUser from '../controllers/users/addUser';

const router = Express.Router();

router.post("/addUser", addUser);

export {
  router
};