document
  .getElementById("BotonFlecha")
  .addEventListener("click", menuDesplegable);

function menuDesplegable() {
  var menu = document.getElementById("mapa");
  var flecha = document.getElementById("BotonFlecha");

  if (menu.className == "mapaCerrado") {
    menu.className = "mapaAbierto";
    flecha.className = "bx bxs-up-arrow";
  } else {
    menu.className = "mapaCerrado";
    flecha.className = "bx bxs-down-arrow";
  }
}
