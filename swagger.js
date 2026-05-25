const swaggerJsdoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'API Materias',
            version: '1.0.0',
            description: 'Documentación de la API de materias'
        },
        servers: [
            {
                url: 'https://api-materias.onrender.com'
            }
        ]
    },
    apis: ['./src/rutas/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;