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

/* ----------------------------------------------------------------- CRUD USUARIO  ----------------------------------------------------------------- */
const newUser = async (req, res) => {
    const params = req.body;
    let usuario = new User();
    // Campos obligatorios:
    if ( params.passuser && params.email && params.rol ){
        usuario.email = params.email;
        // Parametros de formulario:
        // usuario.passuser = bcrypt.hashSync(params.passuser, 8);
        usuario.rol = params.rol;
        usuario.datos_user.identificacion = params.identificacion;
        usuario.datos_user.nombres = params.nombres;
        usuario.datos_user.apellidos = params.apellidos;
        usuario.datos_user.telefono = params.telefono;
        usuario.datos_user.direccion = params.direccion;
        usuario.datos_user.fecha_nacimiento = params.fecha_nacimiento;
        usuario.datos_user.avatar_user = params.avatar_user;
        // Veriificar que el usuario no exista:
        User.find({
            $or:[
                {email: usuario.email},
                {datos_user :{identificacion: usuario.datos_user.identificacion}}
            ],
        }).exec().then (user => {
            if (user && user.length >= 1) {
                return res.status(409).send({message: mensajes.m409});
            }else {
                bcrypt.hash(params.passuser, null, null, (err, encript)=>{
                    if (err) return res.status(200).send({message: 'Error al encriptar'});
                    usuario.passuser = encript;
                    usuario.save().then (usuarioGuardado => {
                        if (!usuarioGuardado) return res.status(404).send({message: mensajes.m404});
                        if (usuarioGuardado) return res.status(200).send({usuario: usuarioGuardado});
                    })
                    .catch(err => {if (err) return res.status(500).send({message: mensajes.m500});});
                });
            }})
            .catch(err =>{
                if (err) throw err;
            });
    }else {
        return res.status(400).send({message: mensajes.m400});
    }

}

module.exports = {
    TestUser,
    newUser,
}
            