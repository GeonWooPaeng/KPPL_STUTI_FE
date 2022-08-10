import { combineReducers } from '@reduxjs/toolkit';

import user from './slices/user';
import question from './slices/question';
import post from './slices/post';
import flashAlert from './slices/flashAlert';
import counter from './slices/counter';
import comment from './slices/comment';
// 만들어 놓은 리듀서들을 합친다.
const reducer = combineReducers({
  counter,
  question,
  flashAlert,
  user,
  comment,
  post,
});

export default reducer;
