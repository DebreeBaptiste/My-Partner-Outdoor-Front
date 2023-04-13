import { createAction, createReducer } from '@reduxjs/toolkit';


const initialState = {
  sports: [],
};

export const getSports = createAction('sports/getSports');

const sportsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(getSports, (state, action) => {
      
      state.sports = action.payload;
    })


});

export default sportsReducer;