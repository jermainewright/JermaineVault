import { TeamSnapshot } from '@jermainevault/shared';

export interface Alert {
  teamId: string;
  severity: 'low' | 'medium' | 'high';
  message: string;
}

export const evaluateAlerts = (metric: TeamSnapshot): Alert[] => {
  const alerts: Alert[] = [];

  if (metric.cycleTimeHours > 72) {
    alerts.push({ teamId: metric.teamId, severity: 'high', message: 'Cycle time exceeded threshold.' });
  }

  if (metric.defectEscapeRate > 0.1) {
    alerts.push({ teamId: metric.teamId, severity: 'medium', message: 'Defect escape rate increased.' });
  }

  return alerts;
};
