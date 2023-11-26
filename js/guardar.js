function guardar() {
    db.collection("usuarios").add({
        nombre: document.getElementById("name").value,
        apellidos: document.getElementById("last").value
    })
    .then((docRef) => {
        mostrarMensaje("Registro Exitoso", true);
    })
    .catch((error) => {
        mostrarMensaje("Error en el registro 😔", false);
    });
    
}

function mostrarMensaje(mensaje, esExito) {
    var dialogo = document.createElement("div");
    dialogo.className = "dialogo" + (esExito ? " dialogo-success" : "");
    dialogo.textContent = mensaje;
    document.body.appendChild(dialogo);

    setTimeout(function() {
        dialogo.parentNode.removeChild(dialogo);
    }, 2000);
    
}