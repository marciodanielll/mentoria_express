const { readFile, writeFile } = require('fs').promises;
const path = require('path');

const usersPath = path.resolve(__dirname, '..', 'data', 'users.json');

const getAllUsers = async () => {
  const response = await readFile(usersPath, 'utf8');
  const users = JSON.parse(response);
  return users;
};

const createNewUser = async ({ name, email, password }) => {
  const users = await getAllUsers();
  const id = Number(users[users.length - 1].id) + 1;
  users.push({
    id,
    name, 
    email, 
    password,
  });
  await writeFile(usersPath, JSON.stringify(users, null, 2));
  return id;
};

module.exports = {
  getAllUsers,
  createNewUser,
};
