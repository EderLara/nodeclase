"use strict";

const TipoUser = require("../../models/tipouser.model");
const { mensajes } = require("../util/estados");

const seedTipoUser = async (req, res) => {
  const seedData = [
    { nombre_perfil: "Administrador" },
    { nombre_perfil: "Usuario Propietario" },
    { nombre_perfil: "Usuario Ocupante" },
  ];

  TipoUser.insertMany(seedData, { ordered: true })
    .then(() => {
      res.status(200).send({ msj: "Datos insertados correctamente" });
    })
    .catch((error) => {
      if (error.code === 11000) {
        res.status(200).send({
          msj: "Error: Valor duplicado encontrado",
          perfiles: seedData,
        });
      } else {
        res.status(200).send({ msj: "Error insertando datos:", error });
      }
    });
};

/* ------------------------------------------------------------------------------------- CRUD TIPOS DE USUARIO ------------------------------------------------------------------------------------- */
const getTiposUser = async (req, res) => {
  TipoUser.find()
    .then((tiposUser) => {
      res.status(200).send(tiposUser);
    })
    .catch((error) => {
      res
        .status(500)
        .send({
          msj: "Error al obtener los tipos de usuarios",
          error: error.message,
        });
    });
};

module.exports = {
  seedTipoUser,
  getTiposUser,
};
