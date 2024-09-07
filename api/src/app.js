'use strict'

const express = require('express');
const morgan = require('morgan');

const app = express();

// Rutas de cada módulo
const userRouter = require('../routers/users/user.route');
const tipoUserRouter = require('../routers/users/tipouser.route')

// Middleware - Funcionalidaes con objetivos intermedios
app.use (express.urlencoded({ extended : false })); // Body := json url
app.use(express.json()); // json 
app.use(morgan('dev'));

// Cors

// Rutas exportadas:
app.use('/api/users', userRouter);
app.use('/api/roles', tipoUserRouter);

module.exports = app