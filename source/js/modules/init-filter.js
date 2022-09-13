const initFilter = () => {
  let sliderItems = document.querySelectorAll('.gallery__slide');
  let filterBtn = document.querySelectorAll('.btn__filter');

  for (let i = 0; i < filterBtn.length; i++) {

    filterBtn[i].addEventListener('click', (e) => {
      e.preventDefault();

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
};

export {initFilter};
