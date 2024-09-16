const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

mobileNavToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
});
