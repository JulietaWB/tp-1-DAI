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
    alert("Usuario registrado");
}