// header transition
window.addEventListener('scroll', function () {
  const top = this.pageYOffset;
  const header = document.querySelector('.header__nav');

  if (top > 80) {
    header.classList.add('header__nav-fixed');
  } else if (top === 0) {
    header.classList.remove('header__nav-fixed');
  }
});
