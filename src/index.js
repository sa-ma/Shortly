import React from 'react';
import ReactDOM from 'react-dom';
import Tracker from '@asayerio/tracker';
import './assets/sass/_base.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';


const tracker = new Tracker({
  projectID: 8794100460112674
});
tracker.start();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
