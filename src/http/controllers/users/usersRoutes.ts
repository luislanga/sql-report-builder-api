import { Router } from 'express';
import { getUserByEmail, register } from './usersController';

export const usersRoutes = Router();

usersRoutes.post('/register', register);
usersRoutes.post('/get-user', getUserByEmail);