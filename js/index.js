function closeNavbar() {
  const navbarCollapse = document.getElementById('navbarSupportedContent');
  navbarCollapse.classList.remove('show');
}

var navbar = document.getElementById("nav1");
var navbarToggler = document.querySelector(".navbar-toggler");

// Function to update the navbar color
function updateNavbarColor() {
  if (window.scrollY > 0 || (navbarToggler.getAttribute("aria-expanded") === "true")) {
    navbar.style.backgroundColor = "#102634"; // Change to the desired color
  } else {
    navbar.style.backgroundColor = "transparent"; // Reset to transparent
  }
}

// Listen for scroll events
window.addEventListener("scroll", function () {
  updateNavbarColor();
});

// Listen for Bootstrap collapsible events
navbarToggler.addEventListener("click", function () {
  updateNavbarColor();
});