import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  userName: string | null;
}

const initialState: AuthState = {
  token: null,
  userName: null
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess(state, action: PayloadAction<{ token: string; userName: string }>) {
      state.token = action.payload.token;
      state.userName = action.payload.userName;
    },
    logout(state) {
      state.token = null;
      state.userName = null;
    }
  }
});

export const { loginSuccess, logout } = authSlice.actions;
export default authSlice.reducer;
