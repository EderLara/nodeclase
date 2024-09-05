"use strict";

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meses = Schema({
  nombre_mes: { type: String, unique: true },
  creado_el: { type: Date, default: Date.now },
});

module.exports = mongoose.model("meses", meses);
