"use strict";

const genero = require("../../models/generos.model");
const { mensajes } = require("../util/estados");

const seedGenero = async (req, res) => {
  const seedData = [
    {
      nombre_genero: "Hombre",
    },
    {
      nombre_genero: "Mujer",
    },
    {
      nombre_genero: "Hombre Trans y  Personas Transmasculinas",
    },
    {
      nombre_genero: "Mujer Trans y Personas Transfemeninas",
    },
    {
      nombre_genero: "Persona Trans",
    },
    {
      nombre_genero: "Persona no Binaria",
    },
    {
      nombre_genero: "Otras Identidades de Género no Hegemónicas",
    },
    {
      nombre_genero: "Sin Información",
    },
  ];
  genero
    .insertMany(seedData, { ordered: true })
    .then(() => {
      res.status(200).send({ msj: mensajes.m200 });
    })
    .catch((error) => {
      if (error.code === 11000) {
        res.status(400).send({
          msj: mensajes.merr,
          generos: seedData,
        });
      } else {
        res.status(500).send({ msj: mensajes.m500 });
      }
    });
};

module.exports = {
  seedGenero,
};
