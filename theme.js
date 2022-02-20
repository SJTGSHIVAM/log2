// const signUpToggle = document.querySelector();
import { lightTheme, setTheme } from "./tui__theme/index.js";
const themeSwitch = document.querySelector(".tui__theme--switch");

/*=============================================
=            theme                           =
=============================================*/
let theme = localStorage.getItem("lg2__theme");
let globalThemeDark;
if (theme == "dark") {
  globalThemeDark = true;
  setTheme();
  themeSwitch.setAttribute("src", "/assets/svgs/sun.svg");
} else if (theme == "light") {
  globalThemeDark = false;
  setTheme({ theme: lightTheme });
  themeSwitch.setAttribute("src", "/assets/svgs/moon.svg");
} else {
  globalThemeDark = true;
  setTheme();
  localStorage.setItem("lg2__theme", "dark");
  themeSwitch.setAttribute("src", "/assets/svgs/sun.svg");
}
const themeSwitcher = () => {
  if (globalThemeDark) {
    setTheme({ theme: lightTheme });
    localStorage.setItem("lg2__theme", "light");
    themeSwitch.setAttribute("src", "/assets/svgs/moon.svg");
  } else {
    setTheme();
    localStorage.setItem("lg2__theme", "dark");
    themeSwitch.setAttribute("src", "/assets/svgs/sun.svg");
  }
  globalThemeDark = !globalThemeDark;
  //   console.log(globalThemeDark);
};
themeSwitch.addEventListener("click", themeSwitcher);

/*=====  End of theme  ======*/
