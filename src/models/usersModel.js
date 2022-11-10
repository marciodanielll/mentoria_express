const connection = require('./connection');

const createNewUser = async ({ name, email, rule = 'user', password }) => {
  const [result] = await connection.execute(`INSERT INTO heroes.users 
    (name, email, rule, password) 
   VALUES (?, ?, ?, ?)`, [name, email, rule, password]);

  return { id: result.insertId, name, email, rule, password };
};

const getAllUsers = async () => {
  const [result] = await connection.execute('SELECT * FROM heroes.users');
  return result;
};

module.exports = {
  createNewUser,
  getAllUsers,
};