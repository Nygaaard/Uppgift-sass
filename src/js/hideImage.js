if (window.location.pathname === "/index.html") {
  let buttonMoonEl = document.getElementById("buttonMoon");
  let buttonSunEl = document.getElementById("buttonSun");
  let hiddenOneEl = document.getElementById("hiddenOne");
  let hiddenTwoEl = document.getElementById("hiddenTwo");
  const rootElement = document.documentElement;
  let isDarkMode = false;
  let isDarkScheme;

  hiddenTwoEl.style.display = "none";
  buttonSunEl.style.display = "none";

  window.onload = init;

  function init() {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      isDarkScheme = true;
      isDarkMode = true;
      hiddenTwoEl.style.display = "block";
      hiddenOneEl.style.display = "none";
      buttonSunEl.style.display = "block";
      buttonMoonEl.style.display = "none";
      rootElement.classList.remove("light-mode");
    } else {
      isDarkScheme = false;
      isDarkMode = false;
      hiddenOneEl.style.display = "block";
      hiddenTwoEl.style.display = "none";
      buttonSunEl.style.display = "none";
      buttonMoonEl.style.display = "block";
      rootElement.classList.add("light-mode");
    }
  }

  buttonMoonEl.addEventListener("click", function () {
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
    isDarkMode = !isDarkMode;
    if (isDarkScheme) {
      if (isDarkMode) {
        rootElement.classList.remove("light-mode");
        rootElement.classList.add("dark-mode");
      } else {
        rootElement.classList.add("light-mode");
        rootElement.classList.remove("dark-mode");
      }
    } else {
      if (isDarkMode) {
        rootElement.classList.add("dark-mode");
        rootElement.classList.remove("light-mode");
      } else {
        rootElement.classList.remove("dark-mode");
        rootElement.classList.add("light-mode");
      }
    }
  }
}
