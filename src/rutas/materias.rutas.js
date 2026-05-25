const express = require('express');

const router = express.Router();

const {
    obtenerMaterias,
    obtenerMateriaPorId,
    crearMateria,
    actualizarMateria,
    eliminarMateria
} = require('../controladores/materias.controlador');
/**
 * @swagger
 * /api/materias:
 *   get:
 *     summary: Obtener todas las materias
 *     responses:
 *       200:
 *         description: Lista de materias
 */

router.get('/', obtenerMaterias);

router.get('/:id', obtenerMateriaPorId);
/**
 * @swagger
 * /api/materias:
 *   post:
 *     summary: Crear una materia
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nombre:
 *                 type: string
 *                 example: Programacion Web
 *               docente:
 *                 type: string
 *                 example: Juan Perez
 *               semestre:
 *                 type: integer
 *                 example: 5
 *     responses:
 *       201:
 *         description: Materia creada correctamente
 */

router.post('/', crearMateria);

/**
 * @swagger
 * /api/materias/{id}:
 *   put:
 *     summary: Actualizar una materia
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Materia actualizada
 */
router.put('/:id', actualizarMateria);
/**
 * @swagger
 * /api/materias/{id}:
 *   delete:
 *     summary: Eliminar una materia
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Materia eliminada
 */

router.delete('/:id', eliminarMateria);

module.exports = router;