// mobile menu

let menuOpen = document.getElementById("menuopen");
let mobileNav = document.getElementsByClassName("mobilenav");
let menuClose = document.getElementById("menuclose");
let body = document.querySelector("body");

menuOpen.addEventListener("click", () => {
  mobileNav[0].style.left = "0";
  menuClose.style.display = "block";
  menuOpen.style.display = "none";
});

menuClose.addEventListener("click", () => {
  mobileNav[0].style.left = "-100%";
  menuClose.style.display = "none";
  menuOpen.style.display = "block";
});

body.addEventListener("click", (event) => {
  if (event.target.classList.value === "mobilenav") {
    mobilenav.style.left = "-100%";
    menuClose.style.display = "none";
    menuOpen.style.display = "block";
  }
});
