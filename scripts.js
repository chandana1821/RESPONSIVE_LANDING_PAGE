// Change navbar style on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 14) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Handle loader visibility only on the home page
window.addEventListener('load', function() {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.display = 'block'; // Show loader
        setTimeout(function() {
            loader.style.display = 'none'; // Hide loader after some time or once page loads
        }, 1000); // Adjust the time as needed
    }
});
