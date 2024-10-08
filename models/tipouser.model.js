'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TipoUser = Schema({
    nombre_perfil:{type: String, unique: true},
    creado_el: {type: Date, default: Date.now}   
});

module.exports = mongoose.model('perfiles', TipoUser)