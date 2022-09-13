const initPriceRange = () => {
  // const parent = document.querySelector('.range-slider');

  // if (!parent) {
  //   return;
  // }

  // const range = parent.querySelector('input[type="range"]');
  // const number = parent.querySelector('input[type="number"]');

  // range.oninput = () => {
  //   let slide1 = parseFloat(range[0].value);
  //   number[0].value = slide1;
  // };

  // number.oninput = () => {
  //   let number1 = parseFloat(number[0].value);
  //   number[0].value = number2;
  //   range[0].value = number1;
  // };

  const parent = document.querySelector('.range-slider');
  // let rangeVal = document.getElementById('range-value');
  let rangeVal = parent.querySelector('input[type="range"]');
  let rangeInp = document.getElementById('range-input');

  let updateVal = function (val) {
    rangeVal.innerHTML = val;
    rangeVal.style.left = val + '%';
  };

  updateVal(rangeInp.value);
};

export {initPriceRange};
