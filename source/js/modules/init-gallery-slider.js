const initGallerySlider = () => {
  let sliderItems = document.querySelectorAll('.slider__slide');
  let filterBtn = document.querySelectorAll('.filter__btn');

  for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener('click', (e) => {
      e.preventDefault();
      resetPagination();
      for (let j = 0; j < filterBtn.length; j++) {
        filterBtn[j].classList.remove('is-active');
      }
      filterBtn[i].classList.add('is-active');

      position = 0;
      items = document.querySelectorAll('.slider__slide');
      itemsCount = items.length;
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
  const container = document.querySelector('.slider');
  const track = document.querySelector('.slider__track');
  const btnPrev = document.querySelector('.slider__btn-prev');
  const btnNext = document.querySelector('.slider__btn-next');
  const itemWidth = container.clientWidth / slidesToShow;
  const movePosition = slidesToScroll * itemWidth;
  let items = document.querySelectorAll('.slider__slide');
  let itemsCount = items.length;
  let pagination = document.querySelectorAll('.slider__pagination span');

  // console.log(pagination.length);

  let slideBulletLeft = () => {
    for (let i = 0; i < pagination.length; i++) {
      if (pagination[i].classList.contains('active') && (i > 0)) {
        pagination[i].classList.remove('active');
        pagination[i - 1].classList.add('active');
        break;
      }
    }
  };

  let slideBulletRight = () => {
    for (let i = 0; i < pagination.length; i++) {
      if (pagination[i].classList.contains('active') && (i < pagination.length - 1)) {
        pagination[i].classList.remove('active');
        pagination[i + 1].classList.add('active');
        break;
      }
    }
  };

  // Ресет текущего булета при каждом выборе кнопкой фильтр
  let resetPagination = () => {
    pagination.forEach((item) => {
      if (item.classList.contains('active')) {
        item.classList.remove('active');
      }
      pagination[0].classList.add('active');
    });
  };

  // Переключение булетов пагинации мышкой
  for (let m = 0; m < pagination.length; m++) {
    pagination[m].addEventListener('click', (e) => {
      e.preventDefault();
      for (let i = 0; i < pagination.length; i++) {
        pagination[i].classList.remove('active');
      }
      pagination[m].classList.add('active');

    });
  }

  items.forEach((item) => {
    item.style.minWidth = `${itemWidth}px`;
  });

  btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition + 24 : itemsLeft * itemWidth;
    // console.log(position);

    setPosition();
    checkBtns();
    slideBulletRight();
  });

  btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
    slideBulletLeft();
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
