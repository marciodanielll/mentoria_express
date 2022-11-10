const usersModel = require('../models/usersModel');

const createNewUser = async ({ name, email, password }) => {
  // criar um usuário apenas se ele já não existir
  // colar a rule para todo usuário cadastrado nesse recurso
  const newUser = await usersModel.createNewUser({ name, email, password });
  return newUser;
};

const getAllUsers = async () => {
  const users = await usersModel.getAllUsers();
  return users.map(({ password: _, ...others }) => others); 
};

module.exports = {
  createNewUser, 
  getAllUsers,
};