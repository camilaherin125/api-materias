require('dotenv').config();

const express = require('express');

const materiasRutas = require('./rutas/materias.rutas');

const manejarErrores = require('./middlewares/error.middleware');

const app = express();

app.use(express.json());

app.use('/api/materias', materiasRutas);

app.use(manejarErrores);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {

    console.log(`Servidor funcionando en puerto ${PORT}`);

});