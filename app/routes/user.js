const UsersController = require("../controllers/api/v1/users_controller");
const user = new UsersController();

const userRoutes = (app) => {
  app.get('/users', (_, res) => {
    user.getAllUsers(res);
  })

  app.put('/reservation', (req, res) => {
    user.reservation(req, res);
  })

  app.get('/message', (_, res) => {
    user.sendMessage(res);
  })
}

module.exports = userRoutes;
