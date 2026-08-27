const burger = document.querySelector(".humburger-menu");
const menu = document.querySelector(".menu");
const menuItem = document.querySelectorAll(".menu-list__item");

const toggleMenu = () => {
  burger.classList.toggle("humburger-menu-active");
  menu.classList.toggle("menu-active");
};

burger.addEventListener("click", () => toggleMenu());

menuItem.forEach((item) => {
  item.addEventListener("click", () => toggleMenu());
});
