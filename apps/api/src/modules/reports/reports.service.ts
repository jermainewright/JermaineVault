import { TeamSnapshot } from '@jermainevault/shared';

export interface WeeklyReport {
  teamId: string;
  avgVelocity: number;
  avgCycleTime: number;
  createdAt: string;
}

export class ReportsService {
  buildWeeklyReport(teamId: string, snapshots: TeamSnapshot[]): WeeklyReport {
    const filtered = snapshots.filter((item) => item.teamId === teamId);
    const avgVelocity = filtered.reduce((acc, item) => acc + item.sprintVelocity, 0) / (filtered.length || 1);
    const avgCycleTime = filtered.reduce((acc, item) => acc + item.cycleTimeHours, 0) / (filtered.length || 1);

    return {
      teamId,
      avgVelocity,
      avgCycleTime,
      createdAt: new Date().toISOString()
    };
  }
}
