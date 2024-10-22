import { Router } from 'express';
import db from './connectionsController';


export const connectionsRoutes = Router();


connectionsRoutes.post('/get-user', async (req, res) => { const result = await db.query('SELECT * FROM app_user') 
    return res.json(result.rows)
} );