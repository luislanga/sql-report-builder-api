import { Router } from 'express';
import { createConnectionConfig } from './connectionConfigsController';
import { authMiddleware } from '../../middlewares/authMiddleware';
//import { getUserByEmail, register } from './usersController';

export const connectionConfigsRoutes = Router();

connectionConfigsRoutes.post('/create', authMiddleware, createConnectionConfig);
// usersRoutes.post('/get-user', getUserByEmail);