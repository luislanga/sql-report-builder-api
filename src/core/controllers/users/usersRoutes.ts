import { Router } from 'express';
import { getUserByEmail, register } from './usersController';
import { authMiddleware } from '../../middlewares/authMiddleware';

export const usersRoutes = Router();

usersRoutes.post('/register', register);
usersRoutes.post('/get-user', authMiddleware, getUserByEmail);