"use strict";

const meses = require("../../models/meses.model");
const { mensajes } = require("../util/estados");

const seedMeses = async (req, res) => {
  const seedData = [
    {
      nombre_mes: "enero",
    },
    {
      nombre_mes: "febrero",
    },
    {
      nombre_mes: "marzo",
    },
    {
      nombre_mes: "abril",
    },
    {
      nombre_mes: "mayo",
    },
    {
      nombre_mes: "junio",
    },
    {
      nombre_mes: "julio",
    },
    {
      nombre_mes: "agosto",
    },
    {
      nombre_mes: "septiembre",
    },
    {
      nombre_mes: "octubre",
    },
    {
      nombre_mes: "noviembre",
    },
    {
      nombre_mes: "diciembre",
    },
  ];
  meses
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
  seedMeses,
};
