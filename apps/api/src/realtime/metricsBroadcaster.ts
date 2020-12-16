import { SOCKET_EVENTS, TeamSnapshot } from '@jermainevault/shared';
import { evaluateAlerts } from '../modules/alerts/alerts.engine';
import { getSocket } from './socket';

export const metricsBroadcaster = {
  broadcast: (snapshot: TeamSnapshot): void => {
    const io = getSocket();
    io.emit(SOCKET_EVENTS.METRIC_UPDATE, snapshot);

    const alerts = evaluateAlerts(snapshot);
    alerts.forEach((alert) => io.emit(SOCKET_EVENTS.ALERT_TRIGGERED, alert));
  }
};
