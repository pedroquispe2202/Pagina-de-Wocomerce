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


// PopUp
const popup = document.querySelector(".popup");
const closePopup = document.querySelector(".popup-close");

closePopup.addEventListener("click", () => {
  popup.classList.remove("show");
});

window.addEventListener("load", () => {
  setTimeout(() => {
    popup.classList.add("show");
  }, 600);
});

/*page-wrap carrusel */

