import { configureStore } from '@reduxjs/toolkit';

import userLoginReducer from './reducers/userLogin';
import modalReducer from './reducers/modal';
import messagesReducer from './reducers/messages';
import createUserReducer from './reducers/createUser';
import errorReducer from './reducers/error';
import notificationReducer from './reducers/notification';

const store = configureStore({
  reducer: {
    user: userLoginReducer,
    modal: modalReducer,
    messages: messagesReducer,
    createUser: createUserReducer,
    error: errorReducer,
    notification: notificationReducer,
  },
});

export default store;
