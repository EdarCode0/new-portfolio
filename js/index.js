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

// Function to start the counter animation
function animateCounters() {
  $('.counter-count').each(function () {
    $(this).prop('Counter', 0).animate({
      Counter: $(this).text()
    }, {
      duration: 5000,
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  });
}

// Attach scroll event listener to trigger animation when user scrolls to reviews section
$(window).on('scroll', function () {
  var reviewsSection = $('.reviews');
  var windowHeight = $(window).height();
  var scrollTop = $(window).scrollTop();
  var sectionOffset = reviewsSection.offset().top;

  // Adjust the scroll offset based on your needs, you can add some buffer to start the animation before reaching the section
  var scrollOffset = windowHeight - (windowHeight / 4);

  if (scrollTop + scrollOffset > sectionOffset) {
    animateCounters();
    // Remove the event listener after the animation is triggered to avoid unnecessary re-triggers
    $(window).off('scroll');
  }
});


$(document).ready(function() {
  $(window).scroll(function() {
      // Get the position of the tech section
      const techSectionPosition = $('#technologies').offset().top;
      
      // Get the current scroll position
      const scrollPosition = $(window).scrollTop() + $(window).height();
      
      // Check if the tech section is in the viewport
      if (scrollPosition > techSectionPosition) {
          $('.info-card').addClass('smooth-transition show');
      }
  });
});
