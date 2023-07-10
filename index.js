const close__btn = document.getElementById("nav__close");
const open__btn = document.getElementById("nav__open");
const navs = document.querySelectorAll(".nav");

open__btn.addEventListener("click", (e) => {
    navs.forEach((nav_el) => {
        nav_el.classList.add("visible");
    })
})

close__btn.addEventListener("click", (e) => {
    navs.forEach((nav_el) => {
        nav_el.classList.remove("visible");
    })
})