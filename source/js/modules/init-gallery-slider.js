const initGallerySlider = () => {
  let sliderItems = document.querySelectorAll('.slider__slide');
  let filterBtn = document.querySelectorAll('.filter__btn');

  for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener('click', (e) => {
      e.preventDefault();
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

      itemsCount = 0;
      sliderItems.forEach((item) => {
        if (filter === 'all') {
          item.style.display = 'block';
          itemsCount = items.length;
        } else {
          if (item.dataset.type === filter) {
            item.style.display = 'block';
            itemsCount += 1;
          } else {
            item.style.display = 'none';
          }
        }
      });
      renderBullet(itemsCount / slidesToShow);
    });
  }

  let position = 0;
  let slidesToShow = 8;
  let slidesToScroll = 8;
  let slideGap = 24;
  // const mobileQuery = window.matchMedia('(max-width: 767px)');
  // const tabletQuery = window.matchMedia('(max-width: 1023px)');
  const container = document.querySelector('.slider');
  const track = document.querySelector('.slider__track');
  const btnPrev = document.querySelector('.slider__btn-prev');
  const btnNext = document.querySelector('.slider__btn-next');
  // ширина слайда = (ширина контейнера + лишний gap в конце слайда) / 4 = 454
  const itemWidth = (container.clientWidth + slideGap) / slidesToShow;
  const movePosition = (slidesToScroll * itemWidth) - slideGap;
  let items = document.querySelectorAll('.slider__slide');
  let itemsCount = items.length;

  let paginationItems = [];
  const renderBullet = (n) => {
    document.querySelector('.slider__pagination').innerHTML = '';
    for (let i = 0; i < n; i++) {
      document.querySelector('.slider__pagination').appendChild(document.createElement('span'));
    }
    paginationItems = document.querySelector('.slider__pagination').childNodes;
    paginationItems[0].classList.add('active');

    // Переключение булетов пагинации мышкой
    for (let m = 0; m < paginationItems.length; m++) {
      paginationItems[m].addEventListener('click', (e) => {
        e.preventDefault();
        for (let i = 0; i < paginationItems.length; i++) {
          paginationItems[i].classList.remove('active');
        }
        paginationItems[m].classList.add('active');

        position = -m * (movePosition + slideGap);
        setPosition();
        checkBtns();
      });
    }
  };

  renderBullet(itemsCount / slidesToShow);

  // Для таблета и мобилы
  // if (mobileQuery.matches) {
  //   console.log('Mobile Query Matched!');
  // }
  // if (tabletQuery.matches) {
  //   console.log('Tablet Query Matched!');
  // }
  // console.log(pagination.length);

  let slideBulletLeft = () => {
    for (let i = 0; i < paginationItems.length; i++) {
      if (paginationItems[i].classList.contains('active') && (i > 0)) {
        paginationItems[i].classList.remove('active');
        paginationItems[i - 1].classList.add('active');
        break;
      }
    }
  };

  let slideBulletRight = () => {
    for (let i = 0; i < paginationItems.length; i++) {
      if (paginationItems[i].classList.contains('active') && (i < paginationItems.length - 1)) {
        paginationItems[i].classList.remove('active');
        paginationItems[i + 1].classList.add('active');
        break;
      }
    }
  };

  btnNext.addEventListener('click', () => {
    const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
    position -= itemsLeft >= slidesToScroll ? movePosition + slideGap : itemsLeft * itemWidth;

    setPosition();
    checkBtns();
    slideBulletRight();
  });

  btnPrev.addEventListener('click', () => {
    const itemsLeft = Math.abs(position) / itemWidth;
    position += itemsLeft >= slidesToScroll ? movePosition + slideGap : itemsLeft * itemWidth;

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
