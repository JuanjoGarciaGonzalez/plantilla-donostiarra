// captura de elementos
const cerrar = document.querySelector(".cerrar")
const izquierda = document.querySelector(".izquierda")
const derecha = document.querySelector(".derecha")
const imagenes = document.querySelectorAll(".galeria__cuerpo img")
const galeria_completa = document.querySelector(".galeria__completa")
const img_activa = document.querySelector(".img-activa")
const contador_indice = document.querySelector(".indice-imagen")
const contador_total = document.querySelector(".total")

let indice_img = 0

// abrir galeria en pantalla completa
function abreCompleta(event) {
    img_activa.src = event.target.src
    galeria_completa.style.display = "flex";
    indice_img = Array.from(imagenes).indexOf(event.target)
    contador_indice.innerHTML = indice_img + 1
    contador_total.innerHTML = imagenes.length

}

imagenes.forEach(function(imagen) {
    imagen.addEventListener("click", abreCompleta)
})

// cerrar galeria en pantalla completa
const cierraCompleta = function (event) {
    galeria_completa.style.display = "none";
}

cerrar.addEventListener("click", cierraCompleta)


// adelantar imagen
function adelantar() {
    if(indice_img === imagenes.length -1) {
        indice_img = -1
    }
    img_activa.src = imagenes[indice_img + 1].src
    indice_img++
    contador_indice.innerHTML = indice_img + 1
}

derecha.addEventListener("click", adelantar)

// atrasar imagen
function atrasar() {
    if(indice_img === 0) {
        indice_img = imagenes.length
    }
    img_activa.src = imagenes[indice_img - 1].src
    indice_img--
    contador_indice.innerHTML = indice_img + 1
}

izquierda.addEventListener("click", atrasar)