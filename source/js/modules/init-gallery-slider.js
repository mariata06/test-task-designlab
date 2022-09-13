// const initGallerySlider = () => {
//   const mySwiper = new Swiper('.swiper-container', {
//     loop: true,
//     slidesPerView: 4,
//     slidesPerColumn: 2,
//     slidesPerGroup: 4,
//     spaceBetween: 24,
//     pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//     },
//     on: {
//       init: function () {},
//       orientationchange: function () {},
//       beforeResize: function () {
//         let vw = window.innerWidth;
//         if(vw > 1000){
//           mySwiper.params.slidesPerView = 8
//           mySwiper.params.slidesPerColumn = 2
//           mySwiper.params.slidesPerGroup = 4;
//         } else {
//           mySwiper.params.slidesPerView = 4
//           mySwiper.params.slidesPerColumn = 2
//           mySwiper.params.slidesPerGroup = 4;
//         }
//         mySwiper.init();
//       },
//     },
//   });
// };

// export {initGallerySlider};

const initGallerySlider = () => {
  let position = 0;
  const slidesToShow = 4;
  const slidesToScroll = 4;
  const container = document.querySelector('.gallery__slider');
  const track = document.querySelector('.gallery__slider-track');
  const btnPrev = document.querySelector('.gallery__btn-prev');
  const btnNext = document.querySelector('.gallery__btn-next');
  const itemWidth = container.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;
  const items = document.querySelectorAll('.gallery__slide');
  const itemsCount = items.length;

  items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
  });

  btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;

    // position += movePosition;
    position -= itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
  });

  const setPosition = () => {
    track.style.transform = `translateX(${position}px)`;
  };

  const checkBtns = () => {
    btnPrev.disabled = position === 0;
    btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
  };
  checkBtns();
};

export {initGallerySlider};
