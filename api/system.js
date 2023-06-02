import express from 'express';
import {
    readLogs,
    removeLogs,
} from '../services/system/logs.js';

import routesHandler from './handler/api-handler.js';

const router = express.Router();

router.post('/logs', routesHandler(readLogs));
router.delete('/logs', routesHandler(removeLogs));

export default router;
