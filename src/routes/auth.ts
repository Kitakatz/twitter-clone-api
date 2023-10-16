import Express from 'express';
import register from '../controllers/auth/register';
import login from '../controllers/auth/login';
import verify from '../controllers/auth/verify';

const router = Express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/verify", verify);

export {
  router
};