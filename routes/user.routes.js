const express = require('express');
// Iniciamos el objeto router para poder definir rutas
const router = express.Router();

const userController = require('../controllers/user.controller');

// Definimos ruta obtener todos los usuario GET
router.get('/users', userController.getUsers);
// Agregamos un nuevo usuario POST
router.post('/users', userController.createUser);
// Borrar un usuario DELETE
router.delete('/users', userController.deleteUser);
// Actualizar un usuario PUT
router.put('/users', userController.updateUser);
// Obtener un usuario específico GET


// Exportamos router para poder usar rutas en app.js
module.exports = router;