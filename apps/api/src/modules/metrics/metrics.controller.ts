import { Request, Response } from 'express';
import { metricsBroadcaster } from '../../realtime/metricsBroadcaster';
import { MetricsService } from './metrics.service';

const metricsService = new MetricsService();

export const ingestMetric = (req: Request, res: Response): void => {
  const metric = metricsService.ingest(req.body);
  metricsBroadcaster.broadcast(metric);
  res.status(201).json({ data: metric });
};
