document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector(".header-buttons-container");
    const underline = document.createElement("div");
    underline.classList.add("underline");
    container.appendChild(underline);

    const buttons = document.querySelectorAll(".header-buttons");

    buttons.forEach((button) => {
        button.addEventListener("mouseenter", function () {
            const rect = button.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();
            underline.style.width = `${rect.width}px`;
            underline.style.left = `${rect.left - containerRect.left}px`;
        });
    });

    container.addEventListener("mouseleave", function () {
        underline.style.width = "0";
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const mobileMenu = document.getElementById("mobile-menu");

    menuToggle.addEventListener("click", function () {
        mobileMenu.style.display = mobileMenu.style.display === "flex" ? "none" : "flex";
    });
});

