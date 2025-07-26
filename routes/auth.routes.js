import express from 'express';
import { login, register, viewProfile } from '../controllers/auth.controller.js';
import { verifyToken } from '../middlewares/authToken.js';

const auth_router = express.Router();


auth_router.post('/register', register);
auth_router.post('/login', login);
auth_router.get('/profile', verifyToken, viewProfile);


export default auth_router;
