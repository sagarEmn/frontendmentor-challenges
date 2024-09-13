document.addEventListener("DOMContentLoaded", function () {
  const titleWrappers = document.querySelectorAll(".container__title-wrapper");

  titleWrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", function () {
      const isActive = this.classList.contains("active");

      titleWrappers.forEach((w) => {
        w.classList.remove("active");
        const icon = w.querySelector(".container__title-icon");
        icon.src = "icon-plus.svg";
      });

      if (!isActive) {
        this.classList.add("active");
        const icon = this.querySelector(".container__title-icon");
        icon.src = "icon-minus.svg";
      }
    });
  });
});
