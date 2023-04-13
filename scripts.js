function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.opacity === "10") {
        menu.style.opacity = "0";
        menu.style.transition = "0.3s ease all";
    } else {
        menu.style.opacity = "10";
        menu.style.transition = "0.3s ease all";
    }
}
