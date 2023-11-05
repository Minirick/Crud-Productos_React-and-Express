import express from 'express';
import {
    crearProducto,
    obtenerProducto,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto
} from "../controller/productoController.js";

const router = express.Router();

router.post('/', crearProducto);
router.get('/listar', obtenerProducto);
router.get('/buscar/:numero_producto', obtenerProductoPorId);
router.put('/actualizar/:numero_producto', actualizarProducto);
router.delete('/eliminar/:numero_producto', eliminarProducto);

export default router;
