// script.js

const darkModeToggle = document.getElementById('dark-mode-toggle');
const darkModeIcon = document.getElementById('dark-mode-icon');

darkModeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');

    // Toggle between sun and moon icons
    if (document.body.classList.contains('dark-mode')) {
        darkModeIcon.textContent = '🌙'; // Moon icon
        localStorage.setItem('theme', 'dark');
    } else {
        darkModeIcon.textContent = '☀️'; // Sun icon
        localStorage.setItem('theme', 'light');
    }
});

// Check local storage for user preference on page load
window.onload = function() {
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
        darkModeIcon.textContent = '🌙'; // Set icon to moon on load
    } else {
        darkModeIcon.textContent = '☀️'; // Set icon to sun on load
    }
};

// Smooth scrolling to "My Journey" section
function scrollToMyJourney() {
    const journeySection = document.querySelector('.my-journey');
    journeySection.scrollIntoView({ behavior: 'smooth' });
}
