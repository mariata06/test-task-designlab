const initCalculateArea = () => {
  let minusBtn = document.querySelector('.btn--minus');
  let plusBtn = document.querySelector('.btn--plus');
  let areaWrapper = document.querySelector('.input-wrapper--area');
  // let totalRezult = 0;

  if (areaWrapper) {
    let inputNumber = areaWrapper.querySelector('input');

    minusBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      let currentValue = Number(inputNumber.value) || 0;
      inputNumber.value = currentValue - 1;
      console.log(currentValue);
    });

    plusBtn.addEventListener('click', (evt) => {
      evt.preventDefault();
      let currentValue = Number(inputNumber.value) || 0;
      inputNumber.value = currentValue + 1;
      // inputNumber.value = currentValue + 1 `<span> м <sup>2</sup> </span>`;
      // document.areaWrapper.innerHTML = inputNumber.value;
      console.log(currentValue);
    });

    inputNumber.oninput = function () {
      if (this.value.length > 5) {
        this.value = this.value.slice(0, 5);
      }
    };

    // totalRezult = currentValue + '\u33A1';
  }
};

export {initCalculateArea};
