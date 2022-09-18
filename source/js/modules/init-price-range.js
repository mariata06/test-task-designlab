const initPriceRange = () => {
  document.getElementById('custom-slider').addEventListener('input', function (event) {
    let value = event.target.value;
    document.getElementById('current-value').innerHTML = value;
  });
};

export {initPriceRange};
