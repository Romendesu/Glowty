


// Declaracion de elementos del DOM



// Eventos dentro de la pagina web


document.querySelectorAll("button").forEach(elemento =>{
    elemento.addEventListener("click", () => {
        alert(`Has pulsado el boton: ${elemento.id}`);
    })
})
document.querySelectorAll("article").forEach(divs => {
    // Función que se ejecuta al hacer scroll
    const verificarVisibilidad = () => {
        const rect = divs.getBoundingClientRect();
        
        // Si el artículo tiene el id "introImg", lo mostramos sin verificación de scroll
        if (divs.id === "introImg") {
            divs.classList.add("show");
            divs.classList.remove("hide");
        } else {
            // Verificar si el div está dentro del área visible (viewport)
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                divs.classList.add("show");
                divs.classList.remove("hide");
            } else {
                divs.classList.remove("show");
                divs.classList.add("hide");
            }
        }
    };

    // Llamar a la función cuando el usuario hace scroll
    window.addEventListener("scroll", verificarVisibilidad);

    // Llamar a la función para comprobar si el artículo es visible al recargar la página
    window.addEventListener("load", verificarVisibilidad);

    // Comprobar la visibilidad de inmediato cuando se carga la página (en caso de que ya esté visible)
    verificarVisibilidad();
});
