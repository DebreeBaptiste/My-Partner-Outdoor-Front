import { createReducer, createAction } from '@reduxjs/toolkit';

export const initialState = {
  logged: false,
  credentials: {
    email: 'Zidane@gmail.com',
    password: 'Zidane13!',
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
export const changeCredentialsValue = createAction('user/changeCredentialsValue');

const userReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(saveUser, (state, action) => {
      const { pseudo, bio, picture, birthday, firstname, lastname, id } = action.payload
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
    .addCase(changeCredentialsValue, (state, action) => {
      const { value, name } = action.payload;
      state.credentials[name] = value;
    })
});

export default userReducer;
