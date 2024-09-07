'use strict';

const express = require('express')

const userControl = require('../../controllers/user/user.control');

const api = express.Router();

// Middleware...

// Rutas
api.get('/testusercontrol', userControl.TestUser);
api.get('/usuario/:idusuario', userControl.getUser);
api.post('/newuser/', userControl.newUser);


module.exports = api;