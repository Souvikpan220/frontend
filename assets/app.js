document.addEventListener("DOMContentLoaded", function () {
  var navbar = document.querySelector("[data-navbar]");
  var toggle = document.querySelector("[data-menu-toggle]");
  var menu = document.querySelector("[data-nav-menu]");

  if (!navbar || !toggle || !menu) {
    return;
  }

  function closeMenu() {
    navbar.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation");
  }

  toggle.addEventListener("click", function () {
    var isOpen = navbar.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
    toggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });

  menu.addEventListener("click", function (event) {
    if (event.target && event.target.tagName === "A") {
      closeMenu();
    }
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape") {
      closeMenu();
    }
  });

  document.addEventListener("click", function (event) {
    if (!navbar.contains(event.target)) {
      closeMenu();
    }
  });
});
