'use strict';

const express = require('express')

const userControl = require('../../controllers/user/user.control');

const api = express.Router();

// Middleware...

// Rutas
api.get('/testusercontrol', userControl.TestUser);


module.exports = api;