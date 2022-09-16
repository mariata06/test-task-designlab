const initCalculateArea = () => {
  let minusBtn = document.querySelector('.btn--minus');
  let plusBtn = document.querySelector('.btn--plus');
  let areaWrapper = document.querySelector('.input__wrapper--area');
  let inputNumber = areaWrapper.querySelector('input');
  // let submitBtn = document.getElementById('.form__button');
  // let number = 200; // number value
  // let min = 0; // min number
  // let max = 1000; // max number

  // minusBtn.onclick = function () {
  //   if (number > min) {
  //     number = number - 1; // Minus 1 of the number
  //     inputNumber.value = number; // Display the value in place of the number

  //   }
  //   if (number === min) {
  //     inputNumber.style.color = 'red';
  //     setTimeout(function () {
  //       inputNumber.style.color = 'black';
  //     }, 500);
  //   } else {
  //     inputNumber.style.color = 'black';
  //   }
  // };
  // plusBtn.onclick = function () {
  //   if (number < max) {
  //     number = number + 1;
  //     inputNumber.value = number; /// Display the value in place of the number
  //   }
  //   if (number === max) {
  //     inputNumber.style.color = 'red';
  //     setTimeout(function () {
  //       inputNumber.style.color = 'black';
  //     }, 500);
  //   } else {
  //     inputNumber.style.color = 'black';
  //   }
  // };
  // submitBtn.onclick = function(){
  //   alert("you choice : " + number);
  // };

  minusBtn.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputNumber.value) || 0;
    inputNumber.value = currentValue - 1;
  });

  plusBtn.addEventListener('click', event => {
    event.preventDefault();
    const currentValue = Number(inputNumber.value) || 0;
    inputNumber.value = currentValue + 1;
  });
};

export {initCalculateArea};
