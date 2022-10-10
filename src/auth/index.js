import express from 'express';
import githubRouter from './github';

const router = new express.Router();

router.use('/github', githubRouter);

export default router;
