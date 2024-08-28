document.addEventListener("DOMContentLoaded", function () {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");
    const navButtons = document.querySelector(".nav-buttons");

    hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("nav-links-active");
        navButtons.classList.toggle("nav-buttons-active");
        hamburger.classList.toggle("active");
    });
});
