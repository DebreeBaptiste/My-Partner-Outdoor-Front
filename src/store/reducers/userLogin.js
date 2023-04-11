import { createReducer, createAction } from '@reduxjs/toolkit';

export const initialState = {
  logged: !!localStorage.getItem('token'),
  credentials: {
    email: 'johndoe@gmail.com',
    password: 'John1234!',
  },
  userDetails: {
    pseudo: '',
    picture: 'photo',
    id: '',
  },
};

export const saveUser = createAction('user/saveUser');
export const userLogout = createAction('user/userLogout');
export const changeCredentialsValue = createAction(
  'user/changeCredentialsValue'
);
export const resetCredentialsValue = createAction('user/resetCredentialsValue');

const userLoginReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(saveUser, (state, action) => {
      const { pseudo, picture, id } = action.payload;
      state.userDetails = {
        pseudo,
        picture,
        id,
      };
      state.logged = true;
    })
    .addCase(userLogout, (state) => {
      state.userDetails = {
        pseudo: '',
        picture: '',
        id: '',
      };
      state.logged = false;
    })
    .addCase(changeCredentialsValue, (state, action) => {
      const { value, name } = action.payload;
      state.credentials[name] = value;
    })
    .addCase(resetCredentialsValue, (state) => {
      state.credentials.email = '';
      state.credentials.password = '';
    });
});

export default userLoginReducer;
