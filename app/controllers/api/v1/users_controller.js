const { User, Present } = require('../../../db/models');

class UsersController {
  async getAllUsers(res) {
    try {
      const users = await User.findAll({
        include: {
          model: Present,
          attributes: ['id', 'name', 'quantity']
        },
        order: [
          ['id', 'ASC']
        ]
      });

      res.json(users)
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  }

  async reservation(req, res) {
    try {
      const { userId, presentId, confirm, code } = req.body;
      const whereClause = {};

      if (userId !== undefined) {
        whereClause.id = userId;
      }

      if (code !== undefined) {
        whereClause.code = code;
      }

      const user = await User.findOne({
        where: whereClause,
      });

      await user.update({ isConfirmed: confirm, presentId: presentId });

      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UsersController;
