const initCalculateArea = () => {
  let minusBtn = document.querySelector('.btn--minus');
  let plusBtn = document.querySelector('.btn--plus');
  let areaWrapper = document.querySelector('.input__wrapper--area');

  if (areaWrapper) {

    let inputNumber = areaWrapper.querySelector('input');

    minusBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentValue = Number(inputNumber.value) || 0;
      inputNumber.value = currentValue - 1;
    });

    plusBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const currentValue = Number(inputNumber.value) || 0;
      inputNumber.value = currentValue + 1;
    });
  }
};

export {initCalculateArea};
