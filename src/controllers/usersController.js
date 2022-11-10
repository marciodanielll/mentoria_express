const userService = require('../services/usersService');

const createNewUser = async (req, res) => {
  const { name, password, email } = req.body;
  const { id } = await userService.createNewUser({ name, email, password });
  res.status(200).json({ message: `Usuário com id: ${id} criado com sucesso` }); 
};

const getAllUsers = async (_req, res) => {
  const users = await userService.getAllUsers();
  res.status(200).json({ users });
};

module.exports = {
  createNewUser,
  getAllUsers,
};
