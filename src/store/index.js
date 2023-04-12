import { configureStore } from '@reduxjs/toolkit';

import userLoginReducer from './reducers/userLogin';
import modalReducer from './reducers/modal';
import messagesReducer from './reducers/messages';
import createUserReducer from './reducers/createUser';
import errorReducer from './reducers/error';
import notificationReducer from './reducers/notification';
import userDetailsReducer from './reducers/userDetails';

const store = configureStore({
  reducer: {
    user: userLoginReducer,
    userDetails: userDetailsReducer,
    createUser: createUserReducer,
    messages: messagesReducer,
    modal: modalReducer,
    error: errorReducer,
    notification: notificationReducer,
  },
});

export default store;
