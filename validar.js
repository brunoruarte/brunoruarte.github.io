const formatomail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,9}$/;
const formatotel = /^\d{1,16}$/;
const chamba = document.getElementById("msj");

function validar() {
    let nombre = document.getElementById("nombre");
    let nombre_valor = nombre.value.trim();
    let apellido = document.getElementById("apellido");
    let apellido_valor = apellido.value.trim();
    let email = document.getElementById("email");
    let email_valor = email.value.trim();
    let tel = document.getElementById("tel");
    let tel_valor = tel.value.trim();
    let fecha = document.getElementById("fecha");
    let fecha_valor = fecha.value.trim();
    let select = document.getElementById("desplegable");
    let select_valor = select.value;
    let check = document.getElementById("condiciones");
    let check_valor = check.checked;


    let no_validado = true;

    if (nombre_valor === "") {
        document.querySelector('#errornombre').style.display = 'inline';
        nombre.focus();
        no_validado = false;
    } else {
        document.querySelector('#errornombre').style.display = 'none';
    }

    if (apellido_valor === "") {
        document.querySelector('#errorapellido').style.display = 'inline';
        apellido.focus();
        no_validado = false;
    } else {
        document.querySelector('#errorapellido').style.display = 'none';
    }

    if (!formatomail.test(email_valor)) {
        document.querySelector('#errormail').style.display = 'inline';
        email.focus();
        no_validado = false;
    } else {
        document.querySelector('#errormail').style.display = 'none';
    }

    if (!formatotel.test(tel_valor)) {
        document.querySelector('#errortel').style.display = 'inline';
        tel.focus();
        no_validado = false;
    } else {
        document.querySelector('#errortel').style.display = 'none';
    }

    if (fecha_valor === "") {
        document.querySelector('#errorfecha').style.display = 'inline';
        fecha.focus();
        no_validado = false;
    } else {
        document.querySelector('#errorfecha').style.display = 'none';
    }

    if (select_valor === "") {
        document.querySelector('#errorselect').style.display = 'inline';
        select.focus();
        no_validado = false;
    } else {
        document.querySelector('#errorselect').style.display = 'none';
    }

    if (!check_valor) {
        document.querySelector('#errorcheck').style.display = 'inline';
        check.focus();
        no_validado = false;
    } else {
        document.querySelector('#errorcheck').style.display = 'none';
    }

    if (no_validado) {
        document.getElementById("contenedor_formulario").style.display = "none";
        document.getElementById("contenedor_confirmacion").style.display = "block";
        return false;
    } else {        
        let mensaje = `¡Muchas gracias ${nombre_valor}!`;
        chamba.innerHTML = mensaje;
        return false;
    }    
}