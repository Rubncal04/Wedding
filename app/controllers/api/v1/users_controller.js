const { User } = require('../../../db/models');

class UsersController {
  async getAllUsers(res) {
    try {
      const users = await User.findAll();
      
      res.json(users)
    } catch (error) {
      res.status(500).json({ error: "Something went wrong" });
    }
  }
}

module.exports = UsersController;
