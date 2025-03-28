function ValidarNombre()
{
    const nombre = document.getElementById("nombre");
    const error3 = document.getElementById("error1");
    error1.style.color = 'red';

    if (nombre.value.length<3)
    {
        document.getElementById("error1").innerHTML="El nombre debe tener al menos 3 caracteres";
        return false;
    } else{
        error3.style.color = 'green'; 
        document.getElementById("error1").innerHTML="✔";
        return true;
    } 
}

function ValidarEmail()
{
    const email =  document.getElementById("email");
    const error2 = document.getElementById("error2");
    error2.style.color = 'red';
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!(regex.test(email.value))) {
        document.getElementById("error2").innerHTML="El email no es válido.";
        return false;
    }
    else{
        error2.style.color = 'green'; 
        document.getElementById("error2").innerHTML="✔";
        return true;
    } 
}


function ValidarContraseña()
{
    const contra =  document.getElementById("contra");
    const error3 = document.getElementById("error3");
    error3.style.color = 'red';
    const regex = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).+$/;

    if (contra.value.length<8)
    {
        document.getElementById("error3").innerHTML="La contraseña debe tener al menos 8 caracteres";
        return false;
    }
    
    else if (!(regex.test(contra.value))) {
        document.getElementById("error3").innerHTML="La contraseña debe tener al menos una letra mayúscula y un carácter especial.";
        return false;
    }
    else{
        error3.style.color = 'green'; 
        document.getElementById("error3").innerHTML="✔";
        return true;
    } 
}

function CompararContraseñas()
{
    const contra =  document.getElementById("contra");
    const contra2 =  document.getElementById("contra2");
    const error4 = document.getElementById("error4");
    error4.style.color = 'red';
    if (contra.value !== contra2.value) {
        document.getElementById("error4").innerHTML="Las contraseñas no coinciden." ;
        return false;
    }else{
        error4.style.color = 'green'; 
        document.getElementById("error4").innerHTML="✔";
        return true;
    }
}

function EnviarForm(evt)
{
    evt.preventDefault();
    if (ValidarNombre() && ValidarContraseña() && CompararContraseñas())
    {
        alert("Usuario registrado");
    } else {
        alert("Debe completar todos los campos correctamente");
    }
    
}