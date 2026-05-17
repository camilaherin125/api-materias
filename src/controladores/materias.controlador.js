const materias = require('../datos/materias.datos');

// GET
const obtenerMaterias = (req, res) => {

    res.status(200).json(materias);

};

// GET POR ID
const obtenerMateriaPorId = (req, res) => {

    const id = parseInt(req.params.id);

    const materia = materias.find(m => m.id === id);

    if (!materia) {

        return res.status(404).json({
            mensaje: 'Materia no encontrada'
        });

    }

    res.status(200).json(materia);

};

// POST
const crearMateria = (req, res) => {

    const { nombre, docente } = req.body;

    if (!nombre || !docente) {

        return res.status(400).json({
            mensaje: 'Faltan campos obligatorios'
        });

    }

    const nuevaMateria = {
        id: materias.length + 1,
        nombre,
        docente
    };

    materias.push(nuevaMateria);

    res.status(201).json(nuevaMateria);

};

// PUT
const actualizarMateria = (req, res) => {

    const id = parseInt(req.params.id);

    const materia = materias.find(m => m.id === id);

    if (!materia) {

        return res.status(404).json({
            mensaje: 'Materia no encontrada'
        });

    }

    const { nombre, docente } = req.body;

    materia.nombre = nombre;
    materia.docente = docente;

    res.status(200).json({
        mensaje: 'Materia actualizada',
        materia
    });

};

// DELETE
const eliminarMateria = (req, res) => {

    const id = parseInt(req.params.id);

    const index = materias.findIndex(m => m.id === id);

    if (index === -1) {

        return res.status(404).json({
            mensaje: 'Materia no encontrada'
        });

    }

    materias.splice(index, 1);

    res.status(200).json({
        mensaje: 'Materia eliminada correctamente'
    });

};

module.exports = {
    obtenerMaterias,
    obtenerMateriaPorId,
    crearMateria,
    actualizarMateria,
    eliminarMateria
};