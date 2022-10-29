const close = document.querySelector(".close");
const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".nav__items");

hamburger.addEventListener("click", () => {
  menu.classList.add("show");
});

close.addEventListener("click", () => {
  menu.classList.remove("show");
  menu.style.transition = " width 1s ease-in";
});
