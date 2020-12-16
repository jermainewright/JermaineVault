import { configureStore } from '@reduxjs/toolkit';
import auth from '../features/auth/authSlice';
import dashboard from '../features/dashboard/dashboardSlice';
import teams from '../features/teams/teamsSlice';

export const store = configureStore({
  reducer: {
    auth,
    dashboard,
    teams
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
