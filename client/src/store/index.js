import { createStore, combineReducers } from 'redux';
import { cashReducer } from '../reducers/cashReducer';

import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  cash: cashReducer,
});
export const store = createStore(rootReducer, composeWithDevTools());
