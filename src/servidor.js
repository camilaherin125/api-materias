// Carga las variables de entorno desde el archivo .env
require('dotenv').config();

// Importa el framework Express
const express = require('express');
const cors = require('cors');

// Importa las rutas de materias
const materiasRutas = require('./rutas/materias.rutas');

// Importa el middleware para manejar errores
const manejarErrores = require('./middlewares/error.middleware');

// Crea la aplicación de Express
const app = express();
app.use(cors());

// Permite que el servidor entienda datos en formato JSON
app.use(express.json());

// Define la ruta principal para acceder a las materias
// Todas las rutas de materias comenzarán con /api/materias
app.use('/api/materias', materiasRutas);

// Usa el middleware de manejo de errores
app.use(manejarErrores);

// Define el puerto donde correrá el servidor
// Usa el puerto del archivo .env o el 3000 por defecto
const PORT = process.env.PORT || 3000;

// Inicia el servidor
app.listen(PORT, () => {

    // Muestra un mensaje en consola cuando el servidor funciona correctamente
    console.log(`Servidor funcionando en puerto ${PORT}`);

});