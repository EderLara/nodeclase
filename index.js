'use strict'

require('dotenv').config();

const app = require('./app');

// Conexión Base de datos
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const port = process.env.PORTSERVE;
const url = process.env.URL;

// Conexión a la base de datos
mongoose.connect(process.env.DBSTRING)
.then(()=>{
    app.listen(port, ()=>{
        console.log('Database Enable');
        console.log('Server listen:',url + ':'+ port);
    })
})
.catch(err => console.log(err)); 
