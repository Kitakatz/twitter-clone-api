import Express from 'express';
import register from '../controllers/auth/register';
import login from '../controllers/auth/login';
import verify from '../controllers/auth/verify';
import refreshToken from '../controllers/auth/refreshToken';
import syncRefreshTokens from '../controllers/auth/syncSessionTokens';

const router = Express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/verify", verify);
router.post("/refreshToken", refreshToken);
router.post("/syncSessionTokens", syncRefreshTokens)

export {
  router
};