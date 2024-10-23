import { Router } from 'express';
import { createConnectionConfig } from './connectionConfigsController';
//import { getUserByEmail, register } from './usersController';

export const connectionConfigsRoutes = Router();

connectionConfigsRoutes.post('/create', createConnectionConfig);
// usersRoutes.post('/get-user', getUserByEmail);