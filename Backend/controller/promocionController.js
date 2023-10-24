import Promocion from "../models/Promocion.js";


// Controlador para crear una nueva promoción
const crearPromocion = async (req, res) => {
    try {
        const { numero_promocion, producto_en_oferta, tiempo_promocion } = req.body;
        const nuevaPromocion = new Promocion({
            numero_promocion,
            producto_en_oferta,
            tiempo_promocion
        });
        const promocionGuardada = await nuevaPromocion.save();
        res.status(201).json(promocionGuardada);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Error al crear la promoción" });
    }
};

// Controlador para obtener todas las promociones
const obtenerPromocion = async (req, res) => {
    try {
        const promociones = await Promocion.find();
        res.status(200).json(promociones);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las promociones" });
    }
};

// Controlador para obtener una promoción por su número (ID)
const obtenerPromocionPorId = async (req, res) => {
    try {
        const promocion = await Promocion.findOne({ numero_promocion: req.params.numero_promocion });
        if (!promocion) {
            return res.status(404).json({ error: "Promoción no encontrada" });
        }
        res.status(200).json(promocion);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener la promoción" });
    }
};

// Controlador para actualizar una promoción por su número (ID)
const actualizarPromocion = async (req, res) => {
    try {
        const promocion = await Promocion.findOneAndUpdate({ numero_promocion: req.params.numero_promocion }, req.body, { new: true });
        if (!promocion) {
            return res.status(404).json({ error: "Promoción no encontrada" });
        }
        res.status(200).json(promocion);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar la promoción" });
    }
}

// Controlador para eliminar una promoción por su número (ID)
const eliminarPromocion = async (req, res) => {
    try {
        const promocion = await Promocion.findOneAndDelete({ numero_promocion: req.params.numero_promocion });
        if (!promocion) {
            return res.status(404).json({ mensaje: "Promoción no encontrada" });
        }
        res.status(204).json({ mensaje: "Promoción eliminada con éxito" });
    } catch (error) {
        res.status(500).json({ mensaje: "Error al eliminar la promoción" });
    }
}

export {
    crearPromocion,
    obtenerPromocion,
    obtenerPromocionPorId,
    actualizarPromocion,
    eliminarPromocion
};
