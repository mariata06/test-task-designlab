const initCalculateArea = () => {
  let minusBtn = document.querySelector('.btn--minus');
  let plusBtn = document.querySelector('.btn--plus');
  let areaWrapper = document.querySelector('.input__wrapper--number');
  let numberPlace = areaWrapper.querySelector('input');
  // let submitBtn = document.getElementById('.form__button');
  let number = 200; // number value
  let min = 0; // min number
  let max = 1000; // max number

  minusBtn.onclick = function () {
    if (number > min) {
      number = number - 1; // Minus 1 of the number
      numberPlace.value = number; // Display the value in place of the number

    }
    if (number === min) {
      numberPlace.style.color = 'red';
      setTimeout(function () {
        numberPlace.style.color = 'black';
      }, 500);
    } else {
      numberPlace.style.color = 'black';
    }
  };
  plusBtn.onclick = function () {
    if (number < max) {
      number = number + 1;
      numberPlace.value = number; /// Display the value in place of the number
    }
    if (number === max) {
      numberPlace.style.color = 'red';
      setTimeout(function () {
        numberPlace.style.color = 'black';
      }, 500);
    } else {
      numberPlace.style.color = 'black';
    }
  };
  // submitBtn.onclick = function(){
  //   alert("you choice : " + number);
  // };
};

export {initCalculateArea};
