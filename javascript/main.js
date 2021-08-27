const nameText = document.querySelector(".name-tag__body__name");
const visitorText = document.querySelector(".name-tag__body__visit");

nameText.innerText = localStorage.getItem("name");
visitorText.innerText = localStorage.getItem("position");