import {registerUser, loginUser ,userCredits, paymentRazorpay,verifyRazorpay } from '../controllers/userController.js';
import express from 'express';
import userAuth from '../middleware/auth.js';


const userRouter = express.Router();

userRouter.post('/register', registerUser);
userRouter.post('/login', loginUser);
userRouter.get('/credits', userAuth, userCredits);
userRouter.post('/pay-razor',userAuth,paymentRazorpay)
userRouter.post('/verify-razor',  verifyRazorpay);


export default userRouter;

//https://localhost:4000/api/user/register
//https://localhost:4000/api/user/login