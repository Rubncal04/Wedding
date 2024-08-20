const userRoutes = require('./user.js');

const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200).send('Welcome to my Wedding');
  })

  userRoutes(app);
  // materialRoutes(app);
  // collectionRoutes(app)
}

module.exports = routes
