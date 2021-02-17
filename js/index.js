const openNav = document.querySelector(".open-btn");
const closeNav = document.querySelector(".close-btn");
const menu = document.querySelector(".nav-list");

const menuLeft = menu.getBoundingClientRect().left;
openNav.addEventListener("click", () => {
    if(menuLeft < 0) {
        menu.classList.add("show");
    }
});
closeNav.addEventListener("click", () => {
    if(menuLeft < 0) {
        menu.classList.remove("show");
    }
});

/*page-wrap carrusel */

var mySwiper = new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    pagination: ".swiper-pagination",
    grabCursor: true,
    speed: 1000,
    paginationClickable: true,
    parallax: true,
    autoplay: false,
    effect: "slide",
    mousewheelControl: 1
  });
  