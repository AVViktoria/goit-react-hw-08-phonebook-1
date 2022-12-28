import { createSlice } from '@reduxjs/toolkit';
import authOperations from './auth-operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isFetchingCurrentUser: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    //*---------- REGISTER-------//
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.error = null;
    },
    [authOperations.register.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.register.rejected](state, payload) {
      state.error = payload.error;
      state.isFetchingCurrentUser = false;
    },
    //*---------- LOGIN-------//
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
      state.error = null;
    },
    [authOperations.logIn.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.logIn.rejected](state, payload) {
      state.error = payload.error;
      state.isFetchingCurrentUser = false;
    },
    //*---------- LOGOUT-------//
    // [authOperations.logOut.fulfilled](state) {
    //   state.user = { name: null, email: null };
    //   state.token = null;
    //   state.isLoggedIn = false;
    //   state.error = null;
    // },
    [authOperations.logOut.fulfilled]: () => {
      return initialState;
    },

    //*---------- REFRESH-------//
    [authOperations.fetchCurrentUser.pending](state) {
      state.isFetchingCurrentUser = true;
    },
    [authOperations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchingCurrentUser = false;
    },
    [authOperations.fetchCurrentUser.rejected](state) {
      state.isFetchingCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
