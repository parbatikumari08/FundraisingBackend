import express from 'express';
import { getInternData } from '../controllers/internController.js';

const router = express.Router();

router.get('/intern', getInternData);

export default router;
