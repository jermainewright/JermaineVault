import { useEffect } from 'react';
import io from 'socket.io-client';
import { SOCKET_EVENTS, TeamSnapshot } from '@jermainevault/shared';
import { useDispatch } from 'react-redux';
import { metricReceived } from '../features/dashboard/dashboardSlice';

export const useRealtimeMetrics = (): void => {
  const dispatch = useDispatch();

  useEffect(() => {
    const socket = io('http://localhost:4000');
    socket.on(SOCKET_EVENTS.METRIC_UPDATE, (metric: TeamSnapshot) => {
      dispatch(metricReceived(metric));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch]);
};
