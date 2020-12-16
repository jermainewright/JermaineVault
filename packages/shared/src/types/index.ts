export type UserRole = 'admin' | 'manager' | 'engineer';

export interface User {
  id: string;
  email: string;
  fullName: string;
  role: UserRole;
  teamId: string;
}

export interface TeamSnapshot {
  teamId: string;
  sprintVelocity: number;
  cycleTimeHours: number;
  deploymentFrequency: number;
  defectEscapeRate: number;
  capturedAt: string;
}

export interface RealtimeMetricEvent {
  type: 'metric.update';
  payload: TeamSnapshot;
}
