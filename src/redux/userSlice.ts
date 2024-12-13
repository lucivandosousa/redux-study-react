import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: '',
    password: '',
    isLoggedIn: false,
  },
  reducers: {
    changeUser: (state, action) => {
      return {
        ...state,
        name: action.payload.name,
        password: action.payload.password,
        isLoggedIn: true,
      }
    },
    logout: (state) => {
      return {
        ...state,
        name: '',
        password: '',
        isLoggedIn: false,
      }
    }
  }
})

export const { changeUser, logout } = userSlice.actions;

export const selectUser = (state: any) => state.user;

export default userSlice.reducer;