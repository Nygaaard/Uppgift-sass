if (window.location.pathname.includes("animations")) {
  let discoEl = document.getElementById("disco");

  discoEl.addEventListener("click", function () {
    discoEl.style.animation = "rotateDisco 1s linear infinite alternate";
  });
}
