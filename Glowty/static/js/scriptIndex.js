// Funciones
import {addNavEvent} from './utils.js'

// Eventos

const buttonSelector = document.querySelectorAll("button");
buttonSelector.forEach(button => {
    button.addEventListener("click", () => {
        addNavEvent(button.id);
    })
})