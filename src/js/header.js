let hamburgerEl = document.getElementById("hamburger");
let closeEl = document.getElementById("close");
let navMobileEl = document.getElementById("nav-mobile");

hamburgerEl.addEventListener("click", function () {
  navMobileEl.style.display = "block";
});

closeEl.addEventListener("click", function () {
  navMobileEl.style.display = "none";
});
