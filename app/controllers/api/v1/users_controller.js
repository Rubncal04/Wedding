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
      const whereClause = { presentId: null };

      if (userId !== undefined) {
        whereClause.id = userId;
      }

      if (code !== undefined) {
        whereClause.code = code;
      }

      if (!code || !userId) {
        return res.status(404).json({ error: "Require fields. Please check your request" });
      }

      const user = await User.findOne({
        where: whereClause,
      });

      if (!user) {
        return res.status(404).json({ error: "User not found or has present yet" });
      }

      await user.update({ isConfirmed: confirm, presentId: presentId });

      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = UsersController;
