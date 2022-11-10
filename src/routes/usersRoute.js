const { Router } = require('express');
const usersController = require('../controllers/usersController');

const validateNewUser = require('../middlewares/validateNewUser');

const usersRoute = Router();

usersRoute.post('/', validateNewUser, usersController.createNewUser);

usersRoute.get('/', usersController.getAllUsers);

module.exports = {
  usersRoute,
};