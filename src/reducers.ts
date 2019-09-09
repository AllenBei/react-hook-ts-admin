/**
 * Combine all reducers in this file and export the combined reducers.
 */

import { combineReducers } from 'redux';
// import { LOCATION_CHANGE } from 'react-router-redux';

import login from './redux/Login/reducer'
/*
 * routeReducer
 *
 * The reducer merges route location changes into our immutable state.
 * The change is necessitated by moving to react-router-redux@5
 *
 */

// Initial routing state
const routeInitialState = {
  location: null,
};

/**
 * Merge route into the global application state
 */
// function routeReducer(state = routeInitialState, action:any) {
//   switch (action.type) {
//     case LOCATION_CHANGE:
//       return Object.assign({}, state, { location: action.payload });
//     default:
//       return state;
//   }
// }

/**
 * Creates the main reducer with the dynamically injected ones
 */
export default function createReducer(injectedReducers:any) {
  return combineReducers({
    ...injectedReducers,
    login,
  });
}
