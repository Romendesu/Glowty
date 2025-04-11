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
