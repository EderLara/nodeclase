'use strict';

// Modelo de usuario:
const User = require('../../models/users.models')

// Constantes:
const bcrypt = require('bcrypt-nodejs');
const mongopaginate = require('mongoose-pagination');
const path = require('path');
const fs = require('fs');
const { mensajes } = require('../util/estados');
const momento = require('moment')

/* ----------------------------------------------------------------- Controladores ----------------------------------------------------------------- */
// Controlador para crear un nuevo usuario
const TestUser = async (req, res) => {
    console.log(req.body);
    res.status(200).send({
        ahora: momento().format('LTS'), // tambien podemos usar YYYY-MM-DD HH:MM:SS
        mensajes: mensajes
    });
}
  
module.exports = {
    TestUser
}
            