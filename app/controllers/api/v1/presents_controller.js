const { Present } = require('../../../db/models');

class PresentsController {
  async getAllPresents(res) {
    try {
      const presents = await Present.findAll({
        order: [
          ['id', 'ASC']
        ]
      });

      res.status(200).json(presents);
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  }
}

module.exports = PresentsController;
