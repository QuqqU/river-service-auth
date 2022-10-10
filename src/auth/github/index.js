import express from 'express';
import login from './login';
import callback from './callback';

const router = new express.Router();

router.get('/login', login.get);
router.get('/afterlogin', callback.get);

export default router;
