import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Fridge from './Fridge';

const currentFridge = new Fridge(
  "Currently Owned Fridge",
  35,
  200,
  2,
  true,
  true,
  "top",
  false
);

console.log("My first fridge: ", currentFridge);

ReactDOM.render(
    <App />,
    // <Fridge />,
  document.getElementById('root')
);
ReactDOM.render(
  <Fridge />,
  document.getElementById('root2')
);