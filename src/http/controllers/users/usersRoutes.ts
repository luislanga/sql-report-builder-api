import { Router } from 'express';
import { register } from './usersController';

export const usersRoutes = Router();

usersRoutes.post('/register', register);