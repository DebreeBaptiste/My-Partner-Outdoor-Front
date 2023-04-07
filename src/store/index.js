import { configureStore } from '@reduxjs/toolkit';
import userReducer from './reducers/user';
import modalReducer from './reducers/modal';
import messagesReducer from './reducers/messages';

const store = configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    messages: messagesReducer,
  },
});

export default store;
