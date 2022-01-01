const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

function navToggle() {
  btn.classList.toggle("open");
  nav.classList.toggle("hidden");
  document.body.classList.toggle("no-scroll");
}

function removeClass() {
  if (window.innerWidth >= 795) {
    btn.classList.remove("open");
    nav.classList.toggle("hidden");
    document.body.classList.remove("no-scroll");
  }
}

btn.addEventListener("click", navToggle);
window.onresize = removeClass;
