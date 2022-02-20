const loginBtn = document.querySelectorAll(".lg2__btn--login");
const regBtn = document.querySelectorAll(".lg2__btn--reg");
const forgotBtn = document.querySelectorAll(".lg2__btn--forgot");
const loginCard = document.querySelector(".lg2__card--login");
const regCard = document.querySelector(".lg2__card--reg");
const forgotCard = document.querySelector(".lg2__card--forgot");

const toggleCard = (element) => {
  loginCard.classList.add("tui__dis--none");
  regCard.classList.add("tui__dis--none");
  forgotCard.classList.add("tui__dis--none");
  element.classList.remove("tui__dis--none");
};
loginBtn.forEach((btn) =>
  btn.addEventListener("click", () => toggleCard(loginCard))
);
regBtn.forEach((btn) =>
  btn.addEventListener("click", () => toggleCard(regCard))
);
forgotBtn.forEach((btn) =>
  btn.addEventListener("click", () => toggleCard(forgotCard))
);
