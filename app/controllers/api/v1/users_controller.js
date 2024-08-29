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
      console.log(req.body);

      if (userId !== undefined) {
        whereClause.id = userId;
      }

      if (code !== undefined) {
        whereClause.code = code;
      }

      if (!code && !userId) {
        return res.status(202).json({ error: "Campos requeridos, por favor valida!" });
      }

      const user = await User.findOne({
        where: whereClause,
      });

      if (!user) {
        return res.status(202).json({ error: "Invitado no encontrado o regalo ya escogido" });
      }

      await user.update({ isConfirmed: confirm, presentId: presentId });

      res.status(200).json({
        user,
        message: "Confirmacion exitosa"
      });
    } catch (error) {
      console.error(error);
      res.status(202).json({ error: error.message });
    }
  }
}

module.exports = UsersController;
