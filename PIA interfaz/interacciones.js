<<<<<<< HEAD
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

            // 1. Esperamos 1 segundo para que el usuario lea el mensaje de éxito
            setTimeout(() => {
                // Le agregamos la clase CSS al contenedor para que empiece a desvanecerse
                formulario.parentElement.classList.add("desvanecer");
            }, 1000);
            // ESPERA 1.5 SEGUNDOS Y TE MANDA A LA TIENDA
            setTimeout(() => {
                window.location.href = "pantalla de inicio.html"; 
            }, 1500);
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
=======
// Panel de accesibilidad
/* const toggle = document.getElementById("large-text-toggle");

if(localStorage.getItem("largeText") === "true"){
    document.body.classList.add("large-text");
    toggle.checked = true;
}

toggle.addEventListener("change", () => {

    document.body.classList.toggle("large-text");

    localStorage.setItem(
        "largeText",
        toggle.checked
    );

});

const settingsBtn =
    document.getElementById("settings-btn");

const accessPanel =
    document.getElementById("accessPanel");

settingsBtn.addEventListener("click", () => {
    accessPanel.classList.toggle("show");
});

console.log(settingsBtn);
console.log(accessPanel); */

const accBtn = document.getElementById("settings-btn");
const accessPanel = document.getElementById("accessPanel");

// Solo activa los eventos si AMBOS elementos existen en el HTML actual
if (accBtn && accessPanel) {
    accBtn.addEventListener("click", () => {
        accessPanel.classList.toggle("show");

        /* mover foco al primer input */
        if (accessPanel.classList.contains("show")) {
            const firstControl = accessPanel.querySelector("select");
            firstControl?.focus();
        }

        const expanded = accessPanel.classList.contains("show");
        accBtn.setAttribute("aria-expanded", expanded);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            accessPanel.classList.remove("show");
            accBtn.focus();
        }
    });
}

// Toggle Letra Grande
const fontSizeSelect = document.getElementById("font-size");

if (fontSizeSelect) {

    const savedSize =
        localStorage.getItem("fontSize") || "normal";

    fontSizeSelect.value = savedSize;

    document.body.classList.add(savedSize);

    fontSizeSelect.addEventListener("change", () => {

        document.body.classList.remove(
            "normal",
            "large",
            "xlarge"
        );

        document.body.classList.add(
            fontSizeSelect.value
        );

        localStorage.setItem(
            "fontSize",
            fontSizeSelect.value
        );

    });
}

console.log(accBtn);
console.log(accessPanel);
>>>>>>> 5d8b28f2eef2cc92dfe0fad233a56362b43d7f57
