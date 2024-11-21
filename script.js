// Selecciona el enlace de sesión por su ID
var enlaceSesion = document.getElementById("enlacesesion");

// Selecciona el modal
var modal = document.getElementById("Mimodal");

// Selecciona el elemento de cierre (la 'x')
var cerrar = document.getElementsByClassName("cerrar")[0];

// Cuando el usuario hace clic en el enlace de sesión, muestra el modal
enlaceSesion.onclick = function() {
  modal.style.display = "block";
}

// Cuando el usuario hace clic en la 'x', cierra el modal
cerrar.onclick = function() {
  modal.style.display = "none";
}

// Cuando el usuario hace clic fuera del modal, también lo cierra
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
