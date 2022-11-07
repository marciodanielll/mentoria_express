const express = require('express');
const cors = require('cors');
const { getAllUsers, createNewUser } = require('../utils/handleUsers');
const { validateNewUser } = require('../middlewares/validateNewUser');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (_req, res) => res.status(200).send('Eu sou a raiz'));

app.get('/users', async (_req, res) => {
  const users = await getAllUsers();
  res.status(200).json({ users: users.map(({ password: _, ...others }) => others) });
});

app.post('/users', validateNewUser, async (req, res) => {
  const { name, password, email } = req.body;
  const id = await createNewUser(name, email, password);
  res.status(200).json({ message: `Usuário com id: ${id} criado com sucesso` });
});

module.exports = app;