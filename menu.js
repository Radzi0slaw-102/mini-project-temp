document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("menuToggle");
  const menu = document.getElementById("mobileMenu");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
});