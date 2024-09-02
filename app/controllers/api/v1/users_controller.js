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

  async sendMessage(res) {
    try {
      const users = await User.findAll();
      const message = []
      for (const user of users) {
        message.push({
          name: user.name,
          message: this.#formatMessage(user)
        })
      }

      res.status(200).json(message);
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Something went wrong" });
    }
  }

  #formatMessage(user) {
    return `*Querido/a ${user.name},* Con gran alegría en nuestros corazones, queremos invitarte a celebrar el día más especial de nuestras vidas: *¡Nuestra boda!* El próximo *16 de noviembre de 2024* a las *4:00 PM*, en *El lote, Sabanilla/Pto Colombia*, seremos testigos de nuestra unión y nos encantaría contar con tu presencia para compartir este momento tan significativo con nosotros. *Código de confirmación: ${user.code}* Si tienes alguna pregunta o necesitas más información, no dudes en ponerte en contacto con Rubén al *3128994670* o con Keren al *3225369150* .Estaremos encantados de ayudarte. *¡Esperamos verte allí para celebrar juntos este día tan especial!* Con cariño, Rubén & Keren Link de la tarjeta: https://wedding-page-nine.vercel.app/`;
  }
}

module.exports = UsersController;
