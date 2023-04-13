import { createReducer, createAction } from '@reduxjs/toolkit';

export const initialState = {
  credentials: {
    firstname: 'John',
    lastname: 'doe',
    email: 'JohnDoe@gmail.com',
    password: 'John1234!',
    repeat_password: 'John1234!',
    pseudo: 'JohnDoe',
    sport: 'Football',
  },
};

export const updateField = createAction('createUser/updateField');
export const resetFormField = createAction('createUser/resetFormField');

const createUserReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(updateField, (state, action) => {
      const { value, name } = action.payload;
      state.credentials[name] = value;
    })
    .addCase(resetFormField, (state) => {
      state.credentials = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        repeat_password: '',
        pseudo: '',
        sport: '',
      };
    })

});

export default createUserReducer;
