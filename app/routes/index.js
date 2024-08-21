const userRoutes = require('./user.js');
const presentRoutes = require('./present.js');

const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200).send('Welcome to my Wedding');
  })

  userRoutes(app);
  presentRoutes(app);
}

module.exports = routes
