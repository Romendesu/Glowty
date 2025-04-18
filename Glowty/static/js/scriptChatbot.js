import {addNavEvent} from './utils.js'


let d = new Date();
let fechaActual = `${d.getDate()}/${d.getMonth()+1}/${d.getFullYear()}`;
document.getElementById("fechaActual").textContent = fechaActual;


// Cargar elementos dentro del DOM

document.addEventListener("DOMContentLoaded", function() {
    const button = document.getElementById("botonEnviar");
    const msgHistory = document.getElementById("verMensajes");
    
    // Función para agregar el mensaje al DOM
    function addMsgUser(msg) {
        let paragraph = document.createElement("p");
        paragraph.textContent = msg;
        paragraph.classList.add("globoTextoUsuario");
        msgHistory.appendChild(paragraph);
    }

    // Función para agregar la respuesta del bot al DOM
    function addMsgBot(msg) {
        let paragraph = document.createElement("p");
        paragraph.textContent = msg;
        paragraph.classList.add("globoTextoBot");
        msgHistory.appendChild(paragraph);
    }

    // Función para manejar el mensaje y la respuesta
    async function enviarMensaje(mensaje) {
        try {
            const response = await fetch("/ask", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ mensaje: mensaje })
            });

            const data = await response.json();
            addMsgBot(data.respuesta);  

        } catch (error) {
            console.error("Error:", error);
            addMsgBot("Hubo un error con el chatbot. Intenta nuevamente.");
        }
    }

    const buttonSelector = document.querySelectorAll("button");
    buttonSelector.forEach(button => {
        if (button.id !== "botonEnviar")
            button.addEventListener("click", () => {
                addNavEvent(button.id);
        })
    })

    // Cuando el usuario hace clic en el botón, enviar el mensaje
    button.addEventListener("click", function() {
        const input = document.getElementById("mensaje");
        const mensaje = input.value.trim();
        if (mensaje !== "") {
            addMsgUser(mensaje);  // Agrega el mensaje del usuario al chat
            input.value = "";  // Limpiar el campo de entrada
            enviarMensaje(mensaje);  // Enviar el mensaje al backend
        }
    });
    mensaje.addEventListener("keydown", (event) => {
        if(event.key === "Enter"){
            const input = document.getElementById("mensaje");
            const mensaje = input.value.trim();
            if (mensaje !== "") {
                addMsgUser(mensaje);  // Agrega el mensaje del usuario al chat
                input.value = "";  // Limpiar el campo de entrada
                enviarMensaje(mensaje);  // Enviar el mensaje al backend
            }
        }
    })
});

