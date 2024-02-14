if (window.location.pathname === "/animations.html") {
  let textColorEl = document.getElementById("textColor");

  textColorEl.addEventListener("mouseenter", function () {
    textColorEl.classList.add("hover-color");
  });

  textColorEl.addEventListener("mouseleave", function () {
    textColorEl.classList.remove("hover-color");
  });
}
