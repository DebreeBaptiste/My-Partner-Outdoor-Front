import { createReducer, createAction } from '@reduxjs/toolkit';

export const initialState = {
  participants: [{
    userid: '',
    firstname: '',
    lastname: '',
    email: '',
    pseudo: '',
    picture: '',
  }],
};

export const saveParticipants = createAction('eventParticipant/saveParticipants');

const eventParticipantReducer = createReducer(initialState, (builder) => {
  builder

    .addCase(saveParticipants, (state, action) => {
      state.participants = action.payload;
    });
});

export default eventParticipantReducer;
