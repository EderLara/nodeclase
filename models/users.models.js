'use strict';

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UsuarioSchema = Schema({
    passuser: String,
    email: String,
    rol: {type: Schema.ObjectId, ref: 'perfiles'},
    estado: {type: Boolean, default: true},
    datos_user: {
        nombres: String,
        apellidos: String,
        telefono: String,
        direccion: String,
        fecha_nacimiento: Date,
        avatar_user: String,
    }
});

module.exports = mongoose.model('usuario', UsuarioSchema)