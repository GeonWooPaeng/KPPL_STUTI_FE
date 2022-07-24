import logger from 'redux-logger';
import { configureStore } from '@reduxjs/toolkit';

import reducer from './rootReducer';

const store = configureStore({
  reducer,
  middleware: [logger],
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
