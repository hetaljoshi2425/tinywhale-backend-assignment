import express from 'express';
import { stringToArray } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get('/string-to-array', stringToArray);

export default userRouter;
