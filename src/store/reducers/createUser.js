import { createReducer, createAction } from '@reduxjs/toolkit';

export const initialState = {
  credentials: {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    repeat_password: '',
    pseudo: '',
    sport: '',
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
