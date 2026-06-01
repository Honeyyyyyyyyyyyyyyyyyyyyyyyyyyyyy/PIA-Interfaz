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