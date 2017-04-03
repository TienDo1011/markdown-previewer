import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';

const render = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root'),
  );
};

render();
