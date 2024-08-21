const userRoutes = require('./user.js');
const presentRoutes = require('./present.js');

const routes = (app) => {
  app.get('/', (req, res) => {
    res.status(200).send('Welcome to my Wedding');
  })

  app.get('/wake', (req, res) => {
    res.status(200).send("Hey, I'm here 🎉🎊");
  })

  userRoutes(app);
  presentRoutes(app);
}

module.exports = routes
