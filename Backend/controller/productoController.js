import Producto from "../models/Producto.js";

// Controlador para crear un nuevo producto
const crearProducto = async (req, res) => {
    try {
        const { nombre, precio, descripcion, imagen } = req.body; // Cambiar los nombres aquí
        const nuevoProducto = new Producto({
            nombre, // Cambiar el nombre de la variable
            precio, // Cambiar el nombre de la variable
            descripcion, // Cambiar el nombre de la variable
            imagen // Cambiar el nombre de la variable
        });
        const productoGuardado = await nuevoProducto.save();
        res.status(201).json(productoGuardado);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al crear el producto" });
    }
};

// Controlador para obtener todos los productos
const obtenerProducto = async (req, res) => {
    try {
        const productos = await Producto.find();
        res.status(200).json(productos);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los productos" });
    }
};

// Controlador para obtener un producto por su número (ID)
const obtenerProductoPorId = async (req, res) => {
    try {
        const producto = await Producto.findOne({ numero_producto: req.params.numero_producto }); // Cambiar el nombre de la variable
        if (!producto) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el producto" });
    }
};

// Controlador para actualizar un producto por su número (ID)
const actualizarProducto = async (req, res) => {
    try {
        const producto = await Producto.findOneAndUpdate({ numero_producto: req.params.numero_producto }, req.body, { new: true }); // Cambiar el nombre de la variable
        if (!producto) {
            return res.status(404).json({ error: "Producto no encontrado" });
        }
        res.status(200).json(producto);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el producto" });
    }
}

// Controlador para eliminar un producto por su número (ID)
const eliminarProducto = async (req, res) => {
    try {
        const producto = await Producto.findOneAndDelete({ numero_producto: req.params.numero_producto }); // Cambiar el nombre de la variable
        if (!producto) {
            return res.status(404).json({ mensaje: "Producto no encontrado" });
        }
        res.status(204).json({ mensaje: "Producto eliminado con éxito" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar el producto" });
    }
}

export {
    crearProducto,
    obtenerProducto,
    obtenerProductoPorId,
    actualizarProducto,
    eliminarProducto
};
