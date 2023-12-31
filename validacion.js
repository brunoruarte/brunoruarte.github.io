const formatomail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,9}$/;
const formatotel = /^\d{1,16}$/;

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


    let validado = true;

    if (nombre_valor === "") {
        document.querySelector('#errornombre').style.display = 'inline';
        nombre.focus();
        validado = false;
    } else {
        document.querySelector('#errornombre').style.display = 'none';
    }

    if (apellido_valor === "") {
        document.querySelector('#errorapellido').style.display = 'inline';
        apellido.focus();
        validado = false;
    } else {
        document.querySelector('#errorapellido').style.display = 'none';
    }

    if (!formatomail.test(email_valor)) {
        document.querySelector('#errormail').style.display = 'inline';
        email.focus();
        validado = false;
    } else {
        document.querySelector('#errormail').style.display = 'none';
    }

    if (!formatotel.test(tel_valor)) {
        document.querySelector('#errortel').style.display = 'inline';
        tel.focus();
        validado = false;
    } else {
        document.querySelector('#errortel').style.display = 'none';
    }

    if (fecha_valor === "") {
        document.querySelector('#errorfecha').style.display = 'inline';
        fecha.focus();
        validado = false;
    } else {
        document.querySelector('#errorfecha').style.display = 'none';
    }

    if (select_valor === "") {
        document.querySelector('#errorselect').style.display = 'inline';
        select.focus();
        validado = false;
    } else {
        document.querySelector('#errorselect').style.display = 'none';
    }

    if (!check_valor) {
        document.querySelector('#errorcheck').style.display = 'inline';
        check.focus();
        validado = false;
    } else {
        document.querySelector('#errorcheck').style.display = 'none';
    }

    if (validado) {
        document.getElementById("contenedor_formulario").style.display = "none";
        document.getElementById("contenedor_confirmacion").style.display = "block";

        const nombre_persona = document.createElement("h3"); //Creo el nodo tipo elemento h3
        const texto = document.createTextNode(`¡Muchas gracias ${nombre_valor}!`); //Creo el nodo tipo texto
        nombre_persona.appendChild(texto); //Agrego el texto al elemento
        document.getElementById("contenedor_confirmacion").appendChild(nombre_persona);  //Agrego el elemento al div "contenedor_confirmacion"      
        
        return false;    
    }   
    return false; 
}