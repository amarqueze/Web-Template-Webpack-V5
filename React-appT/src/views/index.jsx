import React from 'react';
import ReactDOM from 'react-dom';

const App = function() {
    return (
        <h1> Hello Word!! </h1>
    )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);