import express from "express"
import dotenv from "dotenv"
import conectarDB from "./config/db.js";
import adminRoutes from "./routes/adminRoutes.js"
import usuarioRoutes from "./routes/usuarioRoutes.js"
import pedidoRoutes from "./routes/pedidoRoutes.js"
import promocionRoutes from "./routes/promocionRoutes.js"

//const express = require ("express");

const app = express ();

app.use(express.json());

dotenv.config();

conectarDB();

// Routing
/*app.get('/', (req, res) => {
    res.send('Hello world')
})
*/
app.use("/api/admin", adminRoutes);
app.use("/api/usuarios", usuarioRoutes);
app.use("/api/pedidos", pedidoRoutes);
app.use("/api/promocion", promocionRoutes);

const PORT = process.env.PORT || 7777;

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});