import express from 'express';
import dotenv from 'dotenv';
import { router } from '../src/server/routes.ts';

dotenv.config();

const app = express();
app.use(express.json({ limit: '10mb' }));
app.use(router);

export default app;
