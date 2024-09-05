"use strict";

const express = require("express");

const generosControl = require("../../controllers/seeds/generoseed.controll");
const mesesControl = require("../../controllers/seeds/meses.controll");

const api = express.Router();

// Middleware...

// Rutas
api.get("/seedgenero", generosControl.seedGenero);
api.get("/seedmeses", mesesControl.seedMeses);

module.exports = api;
