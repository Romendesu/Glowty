// Declaración de const
express = require("express");
app = express();
const PORT = 3000;

// Declaración de middleware para rutas estaticas

app.use(express.urlencoded({ extended: false }));

// Inicializacion del servidor
app.get("/", (req, res) => {
    res.send("Bienvenido a Marble")
})
app.listen(PORT, '0.0.0.0',() => {
    console.log(`Servidor inicializado en: http://localhost:${PORT}`);
})