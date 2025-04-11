// Declaración de const
express = require("express");
path = require("path");
app = express();
const PORT = 3000;

// Declaración de funciones
function loginUser(){
    return false; // Falso por defecto, aqui se hara la query a la base de datos
}

// Declaración de middleware para rutas estaticas y aplicacion de estilos + js (front).

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

// Direccionamiento de rutas

app.get("/", (req, res) => {
    console.log("Accediendo al index");
    res.sendFile(path.join(__dirname, 'public','components', 'index.html'));
});

app.get("/glowty", (req, res) => {
    if (!loginUser()) {
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