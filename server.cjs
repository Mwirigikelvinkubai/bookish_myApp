const jsonServer = require('json-server');
const express = require('express');
const path = require('path');

const server = express(); // use express directly, not jsonServer.create()
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

const port = process.env.PORT || 3001;

// Serve static files from 'dist'
server.use(express.static(path.join(__dirname, 'dist')));

// Apply default middlewares (including CORS, logger, etc.)
server.use(middlewares);

// Mount your API under '/api'
server.use('/api', router);

// Handle all other routes (frontend routes) by serving index.html
server.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
server.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
