// Panel de accesibilidad
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
//Menu hamburguesa para categoría de mujer, se puede reutilizar...
document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("sidebar-menu");
    const overlay = document.getElementById("sidebar-overlay");
    const closeBtn = document.getElementById("sidebar-close");
    const menuBtn = document.querySelector(".mobile-menu-toggle");

    const openMenu = () => {
        sidebar.classList.add("active");
        overlay.classList.add("active");
        document.body.style.overflow = "hidden";
    };

    const closeMenu = () => {
        sidebar.classList.remove("active");
        overlay.classList.remove("active");
        document.body.style.overflow = "";
    };

    if (menuBtn) menuBtn.addEventListener("click", openMenu);
    closeBtn.addEventListener("click", closeMenu);
    overlay.addEventListener("click", closeMenu);
});

console.log(accBtn);
console.log(accessPanel);