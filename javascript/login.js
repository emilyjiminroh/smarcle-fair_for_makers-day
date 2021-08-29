const loginNameForm = document.querySelector(".form-name");
const loginPositionForm = document.querySelector(".form-position");
const loginNameInput = document.querySelector(".input-name");
const loginPositionInput = document.querySelector(".input-position");

const nameSubmitBtn = document.querySelector(".bsn");
const positionSubmitBtn = document.querySelector(".bsp");

const loginName = document.querySelector(".name");
const loginPosition = document.querySelector(".position");

const CLASS_HIDDEN = "hidden";

const NAME_KEY = "name";
const POSITION_KEY = "position";

const enterBtn = document.querySelector(".enter");
const modiBtn = document.querySelector(".modify");

// 이름 포지션 받으면 1 증가 -> 2 되면 버튼 생성
let num = 0;

// 이름 신분 Array
let nameAndPosition = [];

function nameSubmit(event) {
  event.preventDefault();
  loginNameForm.classList.add(CLASS_HIDDEN);
  nameSubmitBtn.classList.add(CLASS_HIDDEN);
  const name = loginNameInput.value;
  localStorage.setItem(NAME_KEY, name);
  num += 1;
  if (num == 2) {
    enterBtn.classList.remove(CLASS_HIDDEN);
    modiBtn.classList.remove(CLASS_HIDDEN);
  }
  paintName();
}

function positionSubmit(event) {
  event.preventDefault();
  loginPositionForm.classList.add(CLASS_HIDDEN);
  positionSubmitBtn.classList.add(CLASS_HIDDEN);
  const position = loginPositionInput.value;
  localStorage.setItem(POSITION_KEY, position);
  num += 1;
  if (num == 2) {
    enterBtn.classList.remove(CLASS_HIDDEN);
    modiBtn.classList.remove(CLASS_HIDDEN);
  }
  paintPosition();
}

function paintName() {
  const name = localStorage.getItem(NAME_KEY);
  loginName.innerText = `어서오세요, ${name}님!`;
  loginName.classList.remove(CLASS_HIDDEN);
}

function paintPosition() {
  const position = localStorage.getItem(POSITION_KEY);
  loginPosition.innerText = `${position}`;
  loginPosition.classList.remove(CLASS_HIDDEN);
}

const savedName = localStorage.getItem(NAME_KEY);
const savedPosition = localStorage.getItem(POSITION_KEY);

if (savedName === null || savedPosition === null) {
  loginNameInput.classList.remove(CLASS_HIDDEN);
  nameSubmitBtn.classList.remove(CLASS_HIDDEN);
  loginNameForm.addEventListener("submit", nameSubmit);
  loginPositionInput.classList.remove(CLASS_HIDDEN);
  positionSubmitBtn.classList.remove(CLASS_HIDDEN);
  loginPositionForm.addEventListener("submit", positionSubmit);
} else {
  paintName();
  paintPosition();
  enterBtn.classList.remove(CLASS_HIDDEN);
  modiBtn.classList.remove(CLASS_HIDDEN);
}

// 수정 버튼

function delLocal() {
  localStorage.removeItem(NAME_KEY);
  localStorage.removeItem(POSITION_KEY);
}
modiBtn.addEventListener("click", delLocal);