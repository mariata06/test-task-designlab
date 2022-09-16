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

  let sliderItems = document.querySelectorAll('.gallery__slide');
  let filterBtn = document.querySelectorAll('.btn__filter');
  // let sliderPagination = document.createElement('ul');

  // sliderPagination.setAttribute('id', 'pagination-ul');
  // for (let k = 1; k <= slidesCount; k++) {
  //   let paginationItem = document.createElement('li');
  //   paginationItem.setAttribute('data-index', k);
  //   paginationItem.appendChild(document.createTextNode(k));
  //   sliderPagination.appendChild(paginationItem);
  // }

  // document.getElementById('indicators').appendChild(sliderPagination);
  // let paginationCreatedUl = document.getElementById('pagination-ul');
  // let paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));
  // for (let i = 0; i < paginationsBullets.length; i++) {
  //   paginationsBullets[i].onclick = () => {

  //   currentSlide = parseInt(this.getAttribute('data-index'));

  //   // theChecker();
  //   };
  // }

  // theChecker();

  for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener('click', (e) => {
      e.preventDefault();
      for (let j = 0; j < filterBtn.length; j++) {
        filterBtn[j].classList.remove('is-active');
      }
      filterBtn[i].classList.add('is-active');

      position = 0;
      items = document.querySelectorAll('.gallery__slide');
      itemsCount = items.length;
      // track.style.width = '120px';
      setPosition();
      checkBtns();

      const filter = e.target.dataset.filter;

      sliderItems.forEach((item) => {
        if (filter === 'all') {
          item.style.display = 'block';
        } else {
          if (item.dataset.type === filter) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  }

  let position = 0;
  let slidesToShow = 8;
  let slidesToScroll = 8;
  let mobile = window.matchMedia('(max-width: 767px)');
  let tablet = window.matchMedia('(max-width: 1023px)');
  const container = document.querySelector('.gallery__slider');
  const track = document.querySelector('.gallery__slider-track');
  const btnPrev = document.querySelector('.gallery__btn-prev');
  const btnNext = document.querySelector('.gallery__btn-next');
  const itemWidth = container.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;
  let items = document.querySelectorAll('.gallery__slide');
  let itemsCount = items.length;

  // function myFunction(tablet) {
  //   if (tablet.matches) { // If media query matches
  //     document.body.style.backgroundColor = "yellow";
  //     slidesToShow = 4;
  //     slidesToScroll = 4;
  //   } else {
  //    document.body.style.backgroundColor = "pink";
  //   }
  // }
  // myFunction(tablet);
  // tablet.addListener(myFunction);

  if (window.matchMedia('(max-width: 767px)').matches) {
    slidesToShow = 4;
    slidesToScroll = 4;
  } else if (window.matchMedia('(max-width: 1023px)').matches) {
    slidesToShow = 6;
    slidesToScroll = 6;
  }

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
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

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
