const correoCorrecto = "admin@gmail.com";
const passwordCorrecta = "123456";

const formulario = document.getElementById("loginForm");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    const correo = document
        .getElementById("correo")
        .value
        .trim();

    const password = document
        .getElementById("password")
        .value;

    mensaje.style.display = "none";
    mensaje.className = "";

    if(correo === "" || password === ""){

        mensaje.style.display = "block";
        mensaje.className = "mensaje-error";

        mensaje.textContent =
            "⚠️ Correo o contraseña incorrectos.";

        return;
    }

    if(
        correo === correoCorrecto &&
        password === passwordCorrecta
    ){

        mensaje.style.display = "block";
        mensaje.className = "mensaje-exito";

        mensaje.textContent =
            "✅ Inicio de sesión exitoso.";

        // window.location.href = "inicio.html";
    }
    else{

        mensaje.style.display = "block";
        mensaje.className = "mensaje-error";

        mensaje.textContent =
            "⚠️ Correo o contraseña incorrectos.";
    }

});

const btnVer = document.getElementById("verPassword");
const inputPassword = document.getElementById("password");

btnVer.addEventListener("click", function(){

    if(inputPassword.type === "password"){
        inputPassword.type = "text";
        btnVer.textContent = "🙈";
    }
    else{
        inputPassword.type = "password";
        btnVer.textContent = "👁️";
    }

});