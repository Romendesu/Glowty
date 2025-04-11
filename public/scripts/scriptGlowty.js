document.querySelectorAll("button").forEach(button =>{
    button.addEventListener("click", () => {
        switch(button.id){
            case "inicio":
                window.location.href = '/';
                break;
            case "app":
                break;
            default:
                alert(`Has pulsado el boton: ${button.id}`);
        }
    })
})