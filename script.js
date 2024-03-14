const burgir = document.querySelector(".burgir_menu")
const header = document.querySelector(".header_nav")
burgir.addEventListener("click", () =>{
    burgir.classList.toggle("open");
    header.classList.toggle("open");
})