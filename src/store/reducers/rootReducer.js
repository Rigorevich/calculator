import { combineReducers } from 'redux';

import themeReducer from './themeReducer';
import historyReducer from './historyReducer';
import expressionReducer from './expressionReducer';

const rootReducer = combineReducers({
  theme: themeReducer,
  history: historyReducer,
  expression: expressionReducer,
});

export default rootReducer;
