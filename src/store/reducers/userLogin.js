import { createReducer, createAction } from '@reduxjs/toolkit';

export const initialState = {
  logged: false,
  credentials: {
    email: 'johndoeuf@gmail.com',
    password: 'John1234!',
  },
  userDetails: {
    pseudo: 'toto',
    bio: '',
    picture: 'photo',
    birthday: '',
    firstname: '',
    lastname: '',
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
      const { pseudo, bio, picture, birthday, firstname, lastname, id } =
        action.payload;
      state.userDetails = {
        pseudo,
        bio,
        picture,
        birthday,
        firstname,
        lastname,
        id,
      };
      state.logged = true;
    })
    .addCase(userLogout, (state) => {
      state.userDetails = {
        pseudo: '',
        bio: '',
        picture: '',
        birthday: '',
        firstname: '',
        lastname: '',
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
