// Middleware para manejar errores del servidor
const manejarErrores = (err, req, res, next) => {

    // Muestra el error en la consola
    console.error(err.stack);

    // Devuelve respuesta con estado 500
    res.status(500).json({
        mensaje: 'Error interno del servidor'
    });

};

// Exporta el middleware para usarlo en otras partes
module.exports = manejarErrores;