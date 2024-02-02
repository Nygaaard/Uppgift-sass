let buttonMoonEl = document.getElementById("buttonMoon");
let buttonSunEl = document.getElementById("buttonSun");
let hiddenOneEl = document.getElementById("hiddenOne");
let hiddenTwoEl = document.getElementById("hiddenTwo");
let sortDirection = true;
let isDarkMode = false;

hiddenTwoEl.style.display = "none";
buttonSunEl.style.display = "none";

buttonMoonEl.addEventListener("click", function () {
  sortDirection = !sortDirection;

  hiddenOneEl.style.display = "block";
  hiddenTwoEl.style.display = "none";
  buttonSunEl.style.display = "none";
  buttonMoonEl.style.display = "block";

  hiddenTwoEl.style.display = "block";
  hiddenOneEl.style.display = "none";
  buttonSunEl.style.display = "block";
  buttonMoonEl.style.display = "none";

  toggleColorMode();
});

buttonSunEl.addEventListener("click", function () {
  sortDirection = !sortDirection;
  hiddenOneEl.style.display = "none";
  hiddenTwoEl.style.display = "block";
  buttonSunEl.style.display = "block";
  buttonMoonEl.style.display = "none";
  hiddenTwoEl.style.display = "none";
  hiddenOneEl.style.display = "block";
  buttonSunEl.style.display = "none";
  buttonMoonEl.style.display = "block";

  toggleColorMode();
});

function toggleColorMode() {
  const rootElement = document.documentElement;

  if (isDarkMode) {
    rootElement.classList.remove("dark-mode");
  } else {
    rootElement.classList.add("dark-mode");
  }

  isDarkMode = !isDarkMode;
}
