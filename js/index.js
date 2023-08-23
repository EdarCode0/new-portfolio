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
      const aboutSectionPosition = $('#about').offset().top;
      const scrollPosition = $(window).scrollTop() + $(window).height();
      
      if (scrollPosition > aboutSectionPosition) {
          // Add the animation classes only if scrolling down to the section
          $('.read-more').addClass('animate');
          $('.about-title, .desc-about').addClass('animate');
      } else {
          // Remove the animation classes if scrolling above the section
          $('.read-more').removeClass('animate');
          $('.about-title, .desc-about').removeClass('animate');
      }
  });
});

  $(document).ready(function() {
    $(window).scroll(function() {
        const techSectionPosition = $('#technologies').offset().top;
        const scrollPosition = $(window).scrollTop() + $(window).height();
        
        if (scrollPosition > techSectionPosition) {
            $('.info-card').addClass('smooth-transition show');
        }
    });
  });

