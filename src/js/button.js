if (window.location.pathname === "/animations.html") {
  let buttonEl = document.getElementById("button");
  let hiddenEl = document.getElementById("hidden");
  hiddenEl.style.display = "none";

  buttonEl.addEventListener("click", function () {
    if (hiddenEl.style.display === "none") {
      hiddenEl.style.display = "block";
    } else {
      hiddenEl.style.display = "none";
    }
  });
}
