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

let indice_img
let id_album

// abrir galeria en pantalla completa
function abreCompleta(event) {
    id_album = event.target.id
    if(id_album == 0) {
        img_activa.src = imagenes_uno[0].src
        contador_total.innerHTML = imagenes_uno.length
    }else if(id_album == 1){
        img_activa.src = imagenes_dos[0].src
        contador_total.innerHTML = imagenes_dos.length
    }
    
    galeria_completa.style.display = "flex";
    indice_img = 0
    contador_indice.innerHTML = indice_img + 1
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
    if(id_album == 0) {
        if(indice_img === imagenes_uno.length -1) {
            indice_img = -1
        }
        img_activa.src = imagenes_uno[indice_img + 1].src
        indice_img++
        contador_indice.innerHTML = indice_img + 1
    }else if(id_album == 1) {
        if(indice_img === imagenes_dos.length -1) {
            indice_img = -1
        }
        img_activa.src = imagenes_dos[indice_img + 1].src
        indice_img++
        contador_indice.innerHTML = indice_img + 1
    }


}

derecha.addEventListener("click", adelantar)

// atrasar imagen
function atrasar() {
    if(id_album == 0) {

        if(indice_img == 0) {
            indice_img = imagenes_uno.length
        }
        img_activa.src = imagenes_uno[indice_img - 1].src
        indice_img--
        contador_indice.innerHTML = indice_img + 1
     
    }else if(id_album == 1) {
        if(indice_img == 0) {
            indice_img = imagenes_dos.length
        }
        img_activa.src = imagenes_dos[indice_img - 1].src
        indice_img--
        contador_indice.innerHTML = indice_img + 1
    }





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

boton_album.forEach(element => {
    element.addEventListener("mouseover", scale)
    element.addEventListener("mouseout", normal)
});

function scale(event) {
    indice_album = event.target.id
    if(indice_album == 0) {
        imagenes_uno[0].style.transform = "scale(1.2)"
        imagenes_uno[0].style.transition = "all 0.2s ease"
    }else {
        imagenes_dos[0].style.transform = "scale(1.2)"
        imagenes_dos[0].style.transition = "all 0.2s ease"
    }

}

function normal(event) {
    indice_album = event.target.id
    if(indice_album == 0) {
        imagenes_uno[0].style.transform = "scale(1)"
        imagenes_uno[0].style.transition = "all 0.2s ease"
    }else {
        imagenes_dos[0].style.transform = "scale(1)"
        imagenes_dos[0].style.transition = "all 0.2s ease"
    }
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