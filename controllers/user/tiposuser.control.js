'use strict'

const TipoUser = require('../../models/tipouser.model');
const { mensajes } = require('../util/estados');

const seedTipoUser = async (req, res) =>{
    const seedData = [
        { nombre_perfil: 'Administrador' },
        { nombre_perfil: 'Usuario Propietario' },
        { nombre_perfil: 'Usuario Ocupante' }
    ];

    TipoUser.insertMany(seedData, { ordered: true })
    .then(() => {
        res.status(200).send({msj:'Datos insertados correctamente'});
    })
    .catch((error) => {
        if (error.code === 11000) {
            res.status(200).send({
                msj:'Error: Valor duplicado encontrado',
                perfiles: seedData
            });
        } else {
            res.status(200).send({msj:'Error insertando datos:', error});
        }
    });
}

module.exports = {
    seedTipoUser,
}