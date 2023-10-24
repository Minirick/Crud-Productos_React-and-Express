import express from 'express';
import {
    crearPromocion,
    obtenerPromocion,
    obtenerPromocionPorId,
    actualizarPromocion,
    eliminarPromocion
} from "../controller/promocionController.js";


const router = express.Router();

// Ruta para crear una nueva promoción
router.post('/', crearPromocion);

// Ruta para obtener todas las promociones
router.get('/listar', obtenerPromocion);

// Ruta para obtener una promoción por su número (ID)
router.get('/buscar/:numero_promocion', obtenerPromocionPorId);

// Ruta para actualizar una promoción por su número (ID)
router.put('/actualizar/:numero_promocion', actualizarPromocion);

// Ruta para eliminar una promoción por su número (ID)
router.delete('/eliminar/:numero_promocion', eliminarPromocion);

export default router;
