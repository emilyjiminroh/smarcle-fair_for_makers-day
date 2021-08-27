const openButton = document.querySelectorAll(".button_detail");
const modal = document.querySelectorAll(".modal");
const overlay = document.querySelectorAll(".modal__overlay");
const closeBtn = document.querySelectorAll(".btn-detail-close");

for (let i = 0; i < 5; i++) {
  openButton[i].addEventListener("click", () => {
    modal[i].classList.remove("hidden");
  })
}

for (let i = 0; i < 5; i++) {
  closeBtn[i].addEventListener("click", () => {
    modal[i].classList.add("hidden");
  })
}
for (let i = 0; i < 5; i++) {
  overlay[i].addEventListener("click", () => {
    modal[i].classList.add("hidden");
  })
}
