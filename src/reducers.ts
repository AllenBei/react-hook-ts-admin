import { combineReducers } from 'redux';

import login from './redux/Login/reducer'

export default function createReducer(injectedReducers:any) {
  return combineReducers({
    ...injectedReducers,
    login,
  });
}
