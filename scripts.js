function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      menu.style.opacity = "0";
      menu.style.pointerEvents = "none"
    } else {
      menu.classList.add("show");
      menu.style.transition = "0.3s ease all";
      menu.style.opacity = "10";
      menu.style.pointerEvents = "all"
    }
  }


  function closeMenu() {
    var menu = document.getElementById("menu");
    if (menu.classList.contains("show")) {
      menu.classList.remove("show");
      menu.style.opacity = "0";
      menu.style.pointerEvents = "none";
    }
  }