let arreglo_img = ['../Recursos/img_carrusel//perros/1.jpg', '../Recursos/img_carrusel/perros/2.jpg', '../Recursos/img_carrusel/perros/3.jpg'];
let contador = 0;

function carrusel(contenedor) {
    contenedor.addEventListener('click', elemento => {
        let atras = contenedor.querySelector('.atras');
        let adelante = contenedor.querySelector('.adelante');
        let imagen = contenedor.querySelector('.imagen_carru');
        let seleccionado = elemento.target;

        if (seleccionado == atras) {
            if (contador > 0) {
                imagen.src = arreglo_img[contador-1];
                contador -= 1;
            } else {
                imagen.src = arreglo_img[arreglo_img.length-1];
                contador = arreglo_img.length-1;
            }
        }

        if (seleccionado == adelante) {
            if (contador < arreglo_img.length-1) {
                imagen.src = arreglo_img[contador+1];
                contador += 1;
            } else {
                imagen.src = arreglo_img[0];
                contador = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.omaigad');
    carrusel(contenedor);
});