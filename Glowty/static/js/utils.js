export function addNavEvent(id){
    switch(id){
        case "inicio":
            window.location.href = "/"
            break;
        case "ayuda":
            window.location.href = "/help";
            break;
        default:
            alert(`Aun no se ha definido la funcion para el boton con id: ${id}`);
            break;
    }
}