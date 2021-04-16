import 'regenerator-runtime/runtime.js';
import fs from 'fs';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router';
import HTMLServer from './server';
import Routes from '@/routes';

const port = 3001;
const server = express();
const jsFiles: Array<string> = [];

fs.readdirSync('./build/assets').forEach((file) => {
  if (file.split('.').pop() === 'js') jsFiles.push('/assets/' + file);
});

server.use('/assets', express.static('./build/assets'));
server.get('/api/products', (req, res) => {
  res.send('kek123');
});

server.get('*', async (req, res) => {
  ReactDOMServer.renderToNodeStream(
    <HTMLServer scripts={jsFiles}>
      <StaticRouter location={req.url} context={{}}>
        <Routes />
      </StaticRouter>
    </HTMLServer>,
  ).pipe(res);
});

server.listen(port, () => console.log(`Listening on port ${port}`));
