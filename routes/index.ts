import express from 'express';
import userRouter from './UserRoutes';

const router = express.Router();

router.use('/api/', userRouter);

export default router;
