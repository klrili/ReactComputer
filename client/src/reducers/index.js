import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from './userReducer';
import itemReducer from './itemReducer';
import cashReducer from './cashReducer';

const rootReducer = combineReducers({
  user: userReducer,
  item: itemReducer,
  cash: cashReducer,
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
