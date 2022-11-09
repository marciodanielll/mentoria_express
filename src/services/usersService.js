const usersModel = require('../models/usersModel');

const createNewUser = async ({ name, email, password }) => {
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