import { Router } from 'express';
import { queryDb } from './connectionsController';

export const connectionsRoutes = Router();

connectionsRoutes.post('/get-user', queryDb);