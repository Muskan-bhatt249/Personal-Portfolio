// Navbar toggle
function hamburg() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.style.transform = "translateY(0)";
}

function cancle() {
  const dropdown = document.querySelector(".dropdown");
  dropdown.style.transform = "translateY(-500px)";
}

// Typewriter Effect
const words = ["Developer", "Designer", "Learner", "Coder"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function type() {
  const typewriterElement = document.querySelector(".typewriter-text");
  if (!typewriterElement) return; // Guard clause if element doesn't exist on page

  currentWord = words[i];
  let displayText = isDeleting ? currentWord.substring(0, j--) : currentWord.substring(0, j++);
  typewriterElement.textContent = displayText;

  if (!isDeleting && j === currentWord.length) {
    isDeleting = true;
    setTimeout(type, 1000);
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % words.length;
    setTimeout(type, 200);
  } else {
    setTimeout(type, isDeleting ? 100 : 150);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
  initTheme();
  initScrollEffects();
});

// Light/Dark Mode Logic
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Check local storage
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme === "light") {
    body.classList.add("light-mode");
    if (themeToggle) themeToggle.classList.replace("fa-moon", "fa-sun");
  }

  if (themeToggle) {
    themeToggle.addEventListener("click", () => {
      body.classList.toggle("light-mode");

      if (body.classList.contains("light-mode")) {
        themeToggle.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "light");
      } else {
        themeToggle.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "dark");
      }
    });
  }
}

// Scroll Progress & Back to Top
function initScrollEffects() {
  const progressBar = document.getElementById("progress-bar");
  const backToTopBtn = document.getElementById("back-to-top");

  window.addEventListener("scroll", () => {
    // Scroll Progress
    if (progressBar) {
      const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (scrollTop / scrollHeight) * 100;
      progressBar.style.width = scrolled + "%";
    }

    // Back to Top Button
    if (backToTopBtn) {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add("show");
      } else {
        backToTopBtn.classList.remove("show");
      }
    }
  });

  if (backToTopBtn) {
    backToTopBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }
}
