/**
 * Create the store with dynamic reducers
 */

import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createReducer from './reducers';

export default function configureStore(initialState = {}, history:any) {
  // Create the store with  middlewares
  // routerMiddleware: Syncs the location/URL path to the state
  
  const middlewares = [thunk,routerMiddleware(history)];
  const enhancers = [applyMiddleware(...middlewares)];

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  
  const composeEnhancers =
    process.env.NODE_ENV !== 'production' &&
    typeof window === 'object' &&
    //@ts-ignore 因为一开始就没此值，才进行创建
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__  
    //@ts-ignore
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
      : compose;
  /* eslint-enable */

  const store = createStore(
    //@ts-ignore
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  );

  return store;
}
