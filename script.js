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

// Optimize the multiText writing function
let text = document.querySelector(".multiText");
const texts = ["Web App Developer", "Front End Developer", "Back End Developer"];
let index = 0;

const writeText = () => {
  text.textContent = texts[index];
  index = (index + 1) % texts.length;
};

writeText();
setInterval(writeText, 4000);

// Use IntersectionObserver for timeline items
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
