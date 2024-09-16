const mobileNavToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

mobileNavToggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? mobileNavToggle.setAttribute("aria-expanded", false)
    : mobileNavToggle.setAttribute("aria-expanded", true);

  primaryNav.toggleAttribute("data-visible");
});
