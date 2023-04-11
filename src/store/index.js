import { configureStore } from '@reduxjs/toolkit';

import userLoginReducer from './reducers/userLogin';
import modalReducer from './reducers/modal';
import messagesReducer from './reducers/messages';
import createUserReducer from './reducers/createUser';
import errorReducer from './reducers/error';
import eventReducer from './reducers/event';

const store = configureStore({
  reducer: {
    user: userLoginReducer,
    modal: modalReducer,
    messages: messagesReducer,
    createUser: createUserReducer,
    error: errorReducer,
    event : eventReducer,
  },
});

export default store;
