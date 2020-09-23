import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from '../src/containers/app';
import * as serviceWorker from './serviceWorker';
import store from '../src/store';
import { Provider } from 'react-redux';
import { verifyCredentials } from "./actions/auth";

verifyCredentials(store) // Check token on initializing the application

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
