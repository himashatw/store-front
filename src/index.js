import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import { StateProvider } from './Components/StateProvider';
import reducer, { initialState } from './reducer';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={ initialState} reducer={ reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


