// Menu Toggle
function toggleMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.toggle("show");
}
function closeMenu() {
  const navLinks = document.getElementById("navLinks");
  navLinks.classList.remove("show");
}

// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "☀️"
    : "🌙";
});

// Typing Animation
const roles = ["Web Developer", "Designer", "Freelancer", "Coder"];
let i = 0;
let j = 0;
let currentRole = "";
let isDeleting = false;

function type() {
  const typed = document.getElementById("typed");
  if (typed) {
    currentRole = roles[i];
    if (isDeleting) {
      typed.textContent = currentRole.substring(0, j--);
      if (j < 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
      }
    } else {
      typed.textContent = currentRole.substring(0, j++);
      if (j > currentRole.length) {
        isDeleting = true;
        setTimeout(type, 800);
        return;
      }
    }
  }
  setTimeout(type, isDeleting ? 80 : 150);
}
type();

// Scroll Animation
const fadeEls = document.querySelectorAll(".fade-in");
function handleScroll() {
  fadeEls.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
}
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
