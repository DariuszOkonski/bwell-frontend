import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import  _history   from "./utilities/_history"
import HistoryRouter from './components/generic/HistoryRouter';
import { handleRedirectIfNotAuthorized } from './utilities/BackendRequests';


ReactDOM.render(
  <React.StrictMode>
    <HistoryRouter history={_history}>
      {/* <Router> */}
      <App />
      {/* </Router> */}
    </HistoryRouter>
    
  </React.StrictMode>,
  document.getElementById('root')
);
