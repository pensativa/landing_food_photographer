const button = document.querySelector(".menu-button");
const menu = document.querySelector(".top-header__menu__nav-mobile");
const close = menu.querySelector(".modal-close");

button.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.add("open");
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  menu.classList.remove("open");
});
