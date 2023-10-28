var arreglo_img = ['Recursos/img_carrusel/1.png', 'Recursos/img_carrusel/2.png', 'Recursos/img_carrusel/3.png'];
let contador = 0;

function carrusel(contenedor) {
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.botonatras');
        let adelante = contenedor.querySelector('.botonadelante');
        let img = contenedor.querySelector('ímg');
        let seleccionado = e.target;

        if (seleccionado == atras) {
            if (contador > 0) {
                img.src = arreglo_img[contador-1];
                contador -= 1;
            } else {
                img.src = arreglo_img[arreglo_img.length-1];
                contador = arreglo_img.length-1;
            }
        }

        if (seleccionado == adelante) {
            if (contador < arreglo_img.length-1) {
                img.src = arreglo_img[contador+1];
                contador += 1;
            } else {
                img.src = arreglo_img[0];
                contador = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded"); () => {
    let contenedor = document.querySelector('.contenedor');

    carrusel(contenedor);
}