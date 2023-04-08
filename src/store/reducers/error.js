import { createReducer, createAction } from '@reduxjs/toolkit';

export const initialState = {
  samePassword: true,
  message: '',
};

export const addErrorMessage = createAction('error/addErrorMessage');

const errorReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(addErrorMessage, (state, action) => {
      state.message = action.payload;
    });
});

export default errorReducer;
