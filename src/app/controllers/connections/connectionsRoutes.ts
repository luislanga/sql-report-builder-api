import { Router } from 'express';
import { queryDb } from './connectionsController';
import { authMiddleware } from '../../../core/middlewares/authMiddleware';

export const connectionsRoutes = Router();

connectionsRoutes.post('/query', authMiddleware, queryDb);