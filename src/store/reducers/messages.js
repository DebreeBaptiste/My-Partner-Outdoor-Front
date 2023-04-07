import { createReducer, createAction } from '@reduxjs/toolkit';

export const initialState = {
  messages: [
    {
      message: 'RDV à 11 h petante, pas de retard svp',
      user: 'Axel',
      picture: 'photo',
    },
    {
      message: 'J’ai oublier mon ballon de foot, tu en as un toi ',
      user: 'John',
      picture: 'photo',
    },
    {
      message: 'J’ai oublier mon ballon de foot, tu en as un toi ',
      user: 'Olivier',
      picture: 'photo',
    },
    {
      message: 'Ah non c’est bon enfaite, pas de probleme',
      user: 'Olivier',
      picture: 'photo',
    },
    { message: 'Je vais annuler enfaite', user: 'Edward', picture: 'photo' },
  ],
  newMessage: '',
};

export const createNewMessage = createAction('messages/createNewMessage');
export const addNewMessage = createAction('messages/addNewMessage');

const messagesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(createNewMessage, (state, action) => {
      state.newMessage = action.payload;
    })
    .addCase(addNewMessage, (state, action) => {
      state.messages.push(action.payload);
    });
});

export default messagesReducer;
