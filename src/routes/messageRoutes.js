import express from 'express';
import { getTodaysMessage } from '../controllers/messageController';

const router = express.Router();

router.get('/todays-message', getTodaysMessage);

export default router;