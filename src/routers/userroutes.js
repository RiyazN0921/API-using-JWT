const express = require('express');
const userController = require('../controllers/usercontroller');

const Userrouter = express.Router();

Userrouter.post('/create', userController.createUser);

module.exports = Userrouter;
