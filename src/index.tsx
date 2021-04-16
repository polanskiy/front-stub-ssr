import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';

const entryBlock = document.getElementById('root');
const renderFunction: ReactDOM.Renderer = entryBlock?.hasChildNodes()
  ? ReactDOM.hydrate
  : ReactDOM.render;

renderFunction(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  entryBlock,
);
