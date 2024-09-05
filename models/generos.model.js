'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const genero = Schema({
    nombre_genero: {type: String, unique:true},
    creado_el: {type: Date, default: Date.now}
})

module.exports = mongoose.model('genero', genero)