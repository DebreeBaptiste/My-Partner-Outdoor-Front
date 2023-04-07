import { createReducer, createAction } from '@reduxjs/toolkit';

export const initialState = {
  credentials: {
    firstname: 'John',
    lastname: 'doeuf',
    email: 'johndoeuf@gmail.com',
    password: 'John1234!',
    repeat_password: 'John1234!',
    pseudo: 'JohnDoeuf',
    sport: 'FootBall',
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
      state.credentials = initialState.credentials;
    });


});

export default createUserReducer;
