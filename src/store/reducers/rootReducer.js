import { combineReducers } from 'redux';

import themeReducer from './themeReducer';
import historyReducer from './historyReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  history: historyReducer,
});

export default rootReducer;
