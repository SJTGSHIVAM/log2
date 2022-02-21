let label = document.querySelectorAll(".tui__carousel--manual-btn");

function clearManualBtnStyle() {
  label.forEach((manualBtn) => {
    manualBtn.classList.remove("tui__active");
  });
}

let manualBtns = document.querySelector(".tui__carousel--manual-navigation");

manualBtns.addEventListener("click", (e) => {
  clearManualBtnStyle();
  if (e.target.className == "tui__carousel--manual-btn")
    e.target.classList.add("tui__active");
});
