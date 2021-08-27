const hoverModal = document.querySelectorAll(".hover-modal");
const btnsDetail = document.querySelectorAll(".button_detail");

for (let i = 0; i < 5; i++) {
  btnsDetail[i].addEventListener("mouseover", () => {
    hoverModal[i].classList.remove("hidden");
  })
}

for (let i = 0; i < 5; i++) {
  btnsDetail[i].addEventListener("mouseout", () => {
    hoverModal[i].classList.add("hidden");
  })
}
