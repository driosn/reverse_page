import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';

import Navbar from './components/Navbar';


// import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(
  <Navbar />,
  container
);

