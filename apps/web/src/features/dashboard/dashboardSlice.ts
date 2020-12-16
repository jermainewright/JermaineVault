import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TeamSnapshot } from '@jermainevault/shared';

interface DashboardState {
  liveMetrics: TeamSnapshot[];
}

const initialState: DashboardState = {
  liveMetrics: []
};

const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    metricReceived(state, action: PayloadAction<TeamSnapshot>) {
      state.liveMetrics.unshift(action.payload);
      state.liveMetrics = state.liveMetrics.slice(0, 40);
    }
  }
});

export const { metricReceived } = dashboardSlice.actions;
export default dashboardSlice.reducer;
