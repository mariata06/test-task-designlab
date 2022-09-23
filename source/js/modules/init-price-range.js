const initPriceRange = () => {
  document.getElementById('custom-slider').addEventListener('input', function (event) {
    let value = event.target.value;
    // document.getElementById('current-value').innerHTML = value;
    document.getElementById('current-value').value = value;
    document.getElementById('current-value').oninput = function () {
      
    }
  });
};

export {initPriceRange};
