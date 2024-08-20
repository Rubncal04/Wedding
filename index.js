const env_variables = require('./app/config/env_variables.js');
const routes = require('./app/routes/index.js');

const port = env_variables.port || 3301;
const startApolloServer = require('./app/server.js');

async function startServer() {
  const { httpServer, app } = await startApolloServer();
  routes(app);

  await new Promise((resolve) => httpServer.listen({ port: port }, resolve));
  console.log(`Server listening on port ${port}`);
}

startServer().catch((err) => console.error(err));
