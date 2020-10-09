import { TeamSnapshot, nowIso } from '@jermainevault/shared';
import { db } from '../../db/inMemory';

export class MetricsService {
  ingest(snapshot: Omit<TeamSnapshot, 'capturedAt'>): TeamSnapshot {
    const metric: TeamSnapshot = {
      ...snapshot,
      capturedAt: nowIso()
    };
    db.metrics.push(metric);
    return metric;
  }
}
