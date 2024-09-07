'use strict';

const express = require('express')

const tipoUserControl = require('../../controllers/user/tiposuser.control');

const api = express.Router();

// Middleware...

// Rutas
api.get('/seedtipouser', tipoUserControl.seedTipoUser);


module.exports = api;