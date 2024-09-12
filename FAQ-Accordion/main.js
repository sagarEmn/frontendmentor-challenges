document.addEventListener('DOMContentLoaded', function() {
  const titleWrappers = document.querySelectorAll('.container__title-wrapper');

  titleWrappers.forEach(wrapper => {
    wrapper.addEventListener('click', function() {
      // Toggle 'active' class on the clicked wrapper
      this.classList.toggle('active');

      // Update icons for all wrappers
      titleWrappers.forEach(w => {
        const icon = w.querySelector('.container__title-icon');
        if (w.classList.contains('active')) {
          icon.src = 'icon-minus.svg';
        } else {
          icon.src = 'icon-plus.svg';
        }
      });
    });
  });
});