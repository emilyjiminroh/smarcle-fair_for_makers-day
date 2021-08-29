const toggleBtn = document.querySelector(".navbar__toggleBtn");
const menu = document.querySelector(".menus");
const icons = document.querySelector(".others a");

toggleBtn.addEventListener("click", () => {
  menu.classList.toggle('active');
  icons.classList.toggle('active');
});