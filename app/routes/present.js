const PresentsController = require("../controllers/api/v1/presents_controller");
const present = new PresentsController();

const presentRoutes = (app) => {
  app.get('/presents', (_, res) => {
    present.getAllPresents(res);
  })
}

module.exports = presentRoutes;
