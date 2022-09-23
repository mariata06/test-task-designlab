const initSmoothScroll = () => {
  const anchors = document.querySelectorAll('a[href*="#"]');

  anchors.forEach((item) => {
    item.addEventListener('click', function (evt) {
      evt.preventDefault();

      const blockID = item.getAttribute('href').substr(1);

      document.getElementById(blockID).scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    });
  });
};

export {initSmoothScroll};
