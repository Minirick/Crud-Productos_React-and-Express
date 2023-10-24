import mongoose from "mongoose";

const promocionSchema = mongoose.Schema({
    numero_promocion: {
        type: Number,
        required: true,
        trim: true,
    },
    producto_en_oferta: {
        type: String,
        required: true,
    },
    tiempo_promocion: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
});

const Promocion = mongoose.model("Promocion", promocionSchema);

export default Promocion;
