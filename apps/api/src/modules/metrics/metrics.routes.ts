import { Router } from 'express';
import { ingestMetric } from './metrics.controller';

const router = Router();

router.post('/', ingestMetric);

export default router;
