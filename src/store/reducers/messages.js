import { createReducer, createAction } from '@reduxjs/toolkit';

export const initialState = {
  messages: [],
  newMessage: '',
};

export const saveMessages = createAction('messages/saveMessages');
export const createNewMessage = createAction('messages/createNewMessage');
export const addNewMessage = createAction('messages/addNewMessage');

const messagesReducer = createReducer(initialState, (builder) => {
  builder

    .addCase(saveMessages, (state, action) => {
      state.messages = action.payload;
    })
    .addCase(createNewMessage, (state, action) => {
      state.newMessage = action.payload;
    })
    .addCase(addNewMessage, (state, action) => {
      state.messages.push(action.payload);
    });
});

export default messagesReducer;
