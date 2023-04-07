import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import modalReducer from './reducers/modal';
import messagesReducer from './reducers/messages';
import eventReducer from './reducers/event';

const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    messages: messagesReducer,
    event: eventReducer,
  },
});

export default store;
