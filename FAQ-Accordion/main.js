document.addEventListener("DOMContentLoaded", function () {
  const titleWrappers = document.querySelectorAll(".container__title-wrapper");

  titleWrappers.forEach((wrapper) => {
    wrapper.addEventListener("click", function () {
      const isActive = this.classList.contains("active");

      // process: re-iterates over all the (.container__title-wrapper)
      // then:
      // removes 'active' class fro all wrappers
      titleWrappers.forEach((w) => {
        w.classList.remove("active");

        // process: re-iterates over the current div (.container__title-wrapper)
        // then:
        // finds the dom with class "container__title-icon"
        // stores it in const icon
        const icon = w.querySelector(".container__title-icon");
        icon.src = "icon-plus.svg";
      });

    //   adds classlist "active" if doesn't contain active classList
      if(!isActive) {
        this.classList.add("active");
        const icon = this.querySelector(".container__title-icon");
        icon.src = "icon-minus.svg";
      }
    });
  });
});
