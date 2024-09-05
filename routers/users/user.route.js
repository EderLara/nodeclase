'use strict';

const express = require('express')

const userControl = require('../../controllers/user/user.control');

const api = express.Router();

// Middleware...

// Rutas
api.get('/testusercontrol', userControl.TestUser);
api.post('/newuser/', userControl.newUser);


module.exports = api;