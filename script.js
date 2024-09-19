// script.js

const darkModeToggle = document.getElementById("dark-mode-toggle");
const darkModeIcon = document.getElementById("dark-mode-icon");

darkModeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  // Toggle between sun and moon icons
  if (document.body.classList.contains("dark-mode")) {
    darkModeIcon.textContent = "🌙"; 
    localStorage.setItem("theme", "dark");
  } else {
    darkModeIcon.textContent = "☀️"; 
    localStorage.setItem("theme", "light");
  }
});

// Check local storage for user preference on page load
window.onload = function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
    darkModeIcon.textContent = "🌙"; 
  } else {
    darkModeIcon.textContent = "☀️"; 
  }
};

// Smooth scrolling to "My Journey" section
function scrollToMyJourney() {
  const journeySection = document.querySelector(".my-journey");
  journeySection.scrollIntoView({ behavior: "smooth" });
}

document.addEventListener("DOMContentLoaded", function () {
  const timelineItems = document.querySelectorAll(".timeline-item");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.1, 
    }
  );

  timelineItems.forEach((item) => {
    observer.observe(item);
  });
});

let text = document.querySelector(".multiText");

let writeText = () => {
  setTimeout(() => {
    text.textContent = "Web App Developer";
  }, 200);
  setTimeout(() => {
    text.textContent = "Front End Developer";
  }, 4000);
  setTimeout(() => {
    text.textContent = "Back End Developer";
  }, 8000);
};

writeText();

setInterval(writeText, 12000);