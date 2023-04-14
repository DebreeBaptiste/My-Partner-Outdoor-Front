import { createReducer, createAction } from '@reduxjs/toolkit';

export const initialState = {
  logged: !!localStorage.getItem('token'),
  credentials: {
    email: 'JohnDoe@gmail.com',
    password: 'John1234!',
  },
};

export const userLogged = createAction('user/userLogged');
export const userLogout = createAction('user/userLogout');
export const changeCredentialsValue = createAction(
  'user/changeCredentialsValue'
);
export const resetCredentialsValue = createAction('user/resetCredentialsValue');

const userLoginReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(userLogged, (state) => {
      state.logged = true;
    })
    .addCase(userLogout, (state) => {
      state.logged = false;
    })
    .addCase(changeCredentialsValue, (state, action) => {
      const { value, name } = action.payload;
      state.credentials[name] = value;
    })
    .addCase(resetCredentialsValue, (state) => {
      state.credentials.email = '';
      state.credentials.password = '';
    })

});

export default userLoginReducer;
