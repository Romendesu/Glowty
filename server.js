// Declaración de const
express = require("express");
path = require("path");
app = express();
const PORT = 3000;
const loginUser = false; // Simulacion del login del usuario
// Declaración de middleware para rutas estaticas y aplicacion de estilos.

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Direccionamiento de rutas

app.get("/", (req, res) => {
    console.log("Accediendo al index");
    res.sendFile(path.join(__dirname, 'public','components', 'index.html'));
});

app.get("/glowty", (req, res) => {
    if (!loginUser) {
        console.log("Accediendo al menu login");
        res.sendFile(path.join(__dirname, 'public','components', 'login.html'));
    } else{
        console.log("Accediendo a la app principal");
        res.sendFile(path.join(__dirname, 'public','components', 'glowty.html'));
    }
})
// Inicializacion del servidor

app.listen(PORT, '0.0.0.0',() => {
    console.log(`Servidor inicializado en: http://localhost:${PORT}`);
});