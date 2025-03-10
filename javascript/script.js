// sign up script
document.addEventListener('DOMContentLoaded', function() {
    // References to DOM elements
    const loginButton = document.getElementById('loginButton');
    const signupButton = document.querySelector('.signup-btn');
    const popupWrapper = document.querySelector('.popup-wrapper');
    const closeBtn = document.querySelector('.popup-close-btn');
    const registerLink = document.querySelector('.popup-register-link');
    const loginLink = document.querySelector('.popup-login-link');
    const loginPage = document.querySelector('.popup-login-page');
    const registerPage = document.querySelector('.popup-registeration-page');
    
    // Mobile menu functionality
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.getElementById('nav-menu');
    
    if (mobileMenuBtn) {
      mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        this.classList.toggle('active');
      });
    }
    
    // Login popup functionality
    if (loginButton) {
      loginButton.addEventListener('click', function(e) {
        e.preventDefault();
        popupWrapper.classList.add('active-popup');
        loginPage.classList.add('active');
        registerPage.classList.remove('active');
      });
    }
    
    if (signupButton) {
      signupButton.addEventListener('click', function(e) {
        e.preventDefault();
        popupWrapper.classList.add('active-popup');
        registerPage.classList.add('active');
        loginPage.classList.remove('active');
      });
    }
    
    if (closeBtn) {
      closeBtn.addEventListener('click', function() {
        popupWrapper.classList.remove('active-popup');
      });
    }
    
    if (registerLink) {
      registerLink.addEventListener('click', function(e) {
        e.preventDefault();
        loginPage.classList.remove('active');
        registerPage.classList.add('active');
      });
    }
    
    if (loginLink) {
      loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        registerPage.classList.remove('active');
        loginPage.classList.add('active');
      });
    }
    
    // Close popup when clicking outside
    window.addEventListener('click', function(e) {
      if (e.target === popupWrapper) {
        popupWrapper.classList.remove('active-popup');
      }
    });
    
    // Prevent clicks inside popup from closing it
    if (popupWrapper) {
      popupWrapper.addEventListener('click', function(e) {
        if (e.target === this) {
          popupWrapper.classList.remove('active-popup');
        }
      });
    }
  });
// Carousel Functionality
document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.poster-track');
    const posters = document.querySelectorAll('.poster');
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');

    let currentIndex = 0;
    const posterWidth = posters[0].offsetWidth + 20; // Include gap
    let visiblePosters = Math.floor(track.parentElement.offsetWidth / posterWidth);
    let maxIndex = posters.length - visiblePosters;

    // Update track position
    function updateTrackPosition() {
        track.style.transform = `translateX(-${currentIndex * posterWidth}px)`;
    }

    // Handle window resize
    window.addEventListener('resize', function () {
        visiblePosters = Math.floor(track.parentElement.offsetWidth / posterWidth);
        maxIndex = posters.length - visiblePosters;
        currentIndex = Math.min(currentIndex, maxIndex);
        updateTrackPosition();
    });

    // Previous button click
    prevButton.addEventListener('click', function () {
        currentIndex = Math.max(currentIndex - 1, 0);
        updateTrackPosition();
    });

    // Next button click
    nextButton.addEventListener('click', function () {
        currentIndex = Math.min(currentIndex + 1, maxIndex);
        updateTrackPosition();
    });

    // Auto-scroll functionality
    let autoScrollInterval;

    function startAutoScroll() {
        autoScrollInterval = setInterval(function () {
            if (currentIndex >= maxIndex) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            updateTrackPosition();
        }, 5000); // Scroll every 5 seconds
    }

    function stopAutoScroll() {
        clearInterval(autoScrollInterval);
    }

    // Start auto-scroll
    startAutoScroll();

    // Stop auto-scroll on hover or touch
    track.parentElement.addEventListener('mouseenter', stopAutoScroll);
    track.parentElement.addEventListener('mouseleave', startAutoScroll);
    track.parentElement.addEventListener('touchstart', stopAutoScroll);
});