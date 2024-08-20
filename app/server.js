const express = require('express');
const http = require('node:http');
const cors = require('./config/config_cors');
const { json } = require('body-parser');

async function startApolloServer() {
  const app = express();
  app.use(express.urlencoded({ limit: '10mb', extended: true }));
  app.use(express.json({ limit: '10mb', extended: true }));
  app.use(json())
  app.use(cors());
  const httpServer = http.createServer(app);
  // require('./routes')(app)

  return { httpServer, app }
}

module.exports = startApolloServer;
