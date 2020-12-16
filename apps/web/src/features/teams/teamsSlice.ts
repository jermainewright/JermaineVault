import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { TeamSnapshot } from '@jermainevault/shared';
import { apiClient } from '../../api/client';

interface TeamsState {
  snapshots: TeamSnapshot[];
  loading: boolean;
}

const initialState: TeamsState = {
  snapshots: [],
  loading: false
};

export const fetchTeamSnapshots = createAsyncThunk('teams/fetchSnapshots', async (teamId: string) => {
  const response = await apiClient.get<{ data: TeamSnapshot[] }>(`/teams/${teamId}/snapshots`);
  return response.data.data;
});

const teamsSlice = createSlice({
  name: 'teams',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTeamSnapshots.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchTeamSnapshots.fulfilled, (state, action) => {
      state.loading = false;
      state.snapshots = action.payload;
    });
  }
});

export default teamsSlice.reducer;
