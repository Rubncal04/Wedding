const UsersController = require("../controllers/api/v1/users_controller");
const user = new UsersController();

const userRoutes = (app) => {
  app.get('/users', (_, res) => {
    user.getAllUsers(res);
  })

  app.get('/users-no-confirmed', (_, res) => {
    user.getAllUsersWithNoReservation(res);
  })

  app.get('/count', async (_, res) => {
    await user.countInvited(res);
  })

  app.put('/reservation', (req, res) => {
    user.reservation(req, res);
  })

  app.get('/message', (_, res) => {
    user.sendMessage(res);
  })
}

module.exports = userRoutes;
