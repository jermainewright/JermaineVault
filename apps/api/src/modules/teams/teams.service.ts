import { TeamSnapshot } from '@jermainevault/shared';
import { db } from '../../db/inMemory';

export class TeamsService {
  getTeamSnapshots(teamId: string): TeamSnapshot[] {
    return db.metrics.filter((metric) => metric.teamId === teamId);
  }
}
