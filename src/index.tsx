import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// import { ConnectedRouter } from 'react-router-redux';
import { createHashHistory } from 'history';
import App from './router/index';
import configureStore from './configureStore';
import * as serviceWorker from './serviceWorker';
import './index.scss';

const initialState = {};
const history = createHashHistory();
const store = configureStore(initialState, history);

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root'));
serviceWorker.unregister();
