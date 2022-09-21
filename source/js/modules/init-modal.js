const initModal = () => {
  let cartBtn = document.querySelectorAll('[data-open-modal]');
  let cartModal = document.querySelector('.modal');
  let cartModalClose = document.querySelectorAll('[data-close-modal]');
  const modalElements = document.querySelectorAll('.modal');

  if (modalElements.length) {
    modalElements.forEach((el) => {
      setTimeout(() => {
        el.classList.remove('modal--preload');
      }, 100);
    });
  }

  cartBtn.forEach((item) => {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();
      cartModal.classList.add('is-active');
      scrollLock();
    });
  });

  cartModalClose.forEach((item) => {
    item.addEventListener('click', (evt) => {
      evt.preventDefault();
      cartModal.classList.remove('is-active');
      scrollLock();
    });
  });

  let scrollLock = () => {
    document.body.classList.toggle('scroll-lock');
    document.body.classList.toggle('no-scrollbar');
  };
};

export {initModal};
