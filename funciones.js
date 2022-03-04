// captura de elementos
const cerrar = document.querySelector(".cerrar")
const izquierda = document.querySelector(".izquierda")
const derecha = document.querySelector(".derecha")
const imagenes_uno = document.querySelectorAll(".galeria__cuerpo #primero img")
const imagenes_dos = document.querySelectorAll(".galeria__cuerpo #segundo img")
const galeria_completa = document.querySelector(".galeria__completa")
const img_activa = document.querySelector(".img-activa")
const contador_indice = document.querySelector(".indice-imagen")
const contador_total = document.querySelector(".total")

let indice_img = 0

// abrir galeria en pantalla completa
function abreCompleta(event) {
    var id_album = event.target.id
    if(id_album == 1) {
        img_activa.src = imagenes_uno[0].src
        contador_total.innerHTML = imagenes_uno.length
    }else {
        img_activa.src = imagenes_dos[0].src
        contador_total.innerHTML = imagenes_uno.length
    }
    
    galeria_completa.style.display = "flex";
    indice_img = 1
    contador_indice.innerHTML = indice_img
}

const album = document.querySelectorAll(".album")
album.forEach(function(element) {
    element.addEventListener("click", abreCompleta)
})

// cerrar galeria en pantalla completa
const cierraCompleta = function () {
    galeria_completa.style.display = "none";
}

cerrar.addEventListener("click", cierraCompleta)


// adelantar imagen
function adelantar() {
    if(indice_img === imagenes_uno.length) {
        indice_img = 0
    }

    img_activa.src = imagenes_uno[indice_img].src
    indice_img++
    contador_indice.innerHTML = indice_img
}

derecha.addEventListener("click", adelantar)

// atrasar imagen
function atrasar() {

    if(indice_img === 0) {
        indice_img = imagenes_uno.length
    }

    img_activa.src = imagenes_uno[indice_img - 1].src
    indice_img--
    contador_indice.innerHTML = indice_img + 1

}

izquierda.addEventListener("click", atrasar)

// cambiar activa del menu de idioma
const menu_items = document.querySelectorAll(".idioma button")

menu_items.forEach(link => {
    link.addEventListener("click", añadirActiva)
});


function añadirActiva() {
    menu_items.forEach(link => {
        link.classList.remove("activa")
    });

    this.classList.add("activa")
}

// scale imagen album
const boton_album = document.querySelectorAll(".album__texto")
const img_album = document.querySelectorAll(".album img")

boton_album.forEach(element => {
    element.addEventListener("mouseover", scale)
    element.addEventListener("mouseout", normal)
});

function scale(event) {
    indice_album = event.target.id
    img_album[indice_album].style.transform = "scale(1.2)"
    img_album[indice_album].style.transition = "all 0.2s ease"
}

function normal(event) {
    indice_album = event.target.id
    img_album[indice_album].style.transform = "scale(1)"
    img_album[indice_album].style.transition = "all 0.2s ease"
}

// traduccion
const euskera = document.querySelector(".euskera")
const espanol = document.querySelector(".espanol")

$("[data-translate]").jqTranslate('json/index_eus');
espanol.addEventListener("click", idiomaEspanol)
euskera.addEventListener("click", idiomaEuskera)

function idiomaEspanol() {
    $("[data-translate]").jqTranslate('json/index');
}

function idiomaEuskera() {
    $("[data-translate]").jqTranslate('json/index_eus');
}