const { Router } = require('express');
const { createNewUser, getAllUsers } = require('../controllers/usersController');

const { validateNewUser } = require('../middlewares/validateNewUser');

const userRoute = Router();

userRoute.post('/', validateNewUser, createNewUser);

userRoute.get('/', getAllUsers);

module.exports = {
  userRoute,
};