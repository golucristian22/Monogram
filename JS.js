// Burger Button

// const menuBtn = document.querySelector(".menu-btn")
// let menuOpen = false;
// menuBtn.addEventListener("click", () => {
//     if (!menuOpen) {
//         menuBtn.classList.add("open");
//         menuOpen = true;
//     } else {
//         menuBtn.classList.remove("open");
//         menuOpen = false;
//     }
// })

// Navbar menu 
const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".navbar-items");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    menuItems.classList.toggle("open");
});