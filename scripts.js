function toggleMenu() {
  let menu = document.querySelector(".menu");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    menu.style.opacity = "0";
    menu.style.pointerEvents = "none";
  } else {
    menu.classList.add("show");
    menu.style.opacity = "10";
    menu.style.pointerEvents = "all";
  }
}

function closeMenu() {
  let menu = document.querySelector(".menu");
  if (menu.classList.contains("show")) {
    menu.classList.remove("show");
    menu.style.opacity = "0";
    menu.style.pointerEvents = "none";
  }
}