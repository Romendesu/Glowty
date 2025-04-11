// Eventos dentro de la pagina web


document.querySelectorAll("button").forEach(button =>{
    button.addEventListener("click", () => {
        switch(button.id){
            case "inicio":
                break;
            case "app":
                window.location.href = '/glowty';
                break;
            default:
                alert(`Has pulsado el boton: ${button.id}`);
        }
    })
})

document.querySelectorAll("article").forEach(divs => {
    const verificarVisibilidad = () => {
        const rect = divs.getBoundingClientRect();

        if (divs.id === "introImg") {
            divs.classList.add("show");
            divs.classList.remove("hide");
        } else {
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                divs.classList.add("show");
                divs.classList.remove("hide");
            } else {
                divs.classList.remove("show");
                divs.classList.add("hide");
            }
        }
    };

    // Ejecutamos al cargar la página
    verificarVisibilidad();

    // Ejecutamos cada vez que se hace scroll
    window.addEventListener('scroll', verificarVisibilidad);
});
