import mongoose from "mongoose";

const pedidoSchema = mongoose.Schema({
    numero_pedido: {
        type: Number,
        required: true,
        trim: true,
    },
    producto: {
        type: String,
        required: true,
    },
    cliente: {
        type: String,
        required: true,
        trim: true,
    },
    valor_pedido: {
        type: String,
        required: true,
        trim: true,
    },
}, {
    timestamps: true,
});

const Pedido = mongoose.model("Pedidos", pedidoSchema);

export default Pedido;
