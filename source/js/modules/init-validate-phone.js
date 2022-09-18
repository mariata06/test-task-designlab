let phoneInput = document.querySelector('input[type="tel"]');

const initValidatePhone = () => {
  phoneInput.addEventListener('input', function (e) {
    let x = e.target.value.substring(2, e.target.value.length).replace(/\D/g, '').match(/(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = '+7 ' + x[1] + ' ' + (x[3] ? x[2] + '-' : x[2]) + x[3] + (x[4] ? '-' + x[4] : '');
    if (e.target.value.length === 16) {
      phoneInput.style.borderColor = '#E1E1E1';
      phoneInput.setCustomValidity('');
    }
  });
};

phoneInput.addEventListener('invalid', function () {
  if (phoneInput.validity.patternMismatch) {
    phoneInput.style.borderColor = '#DC3545';
    phoneInput.setCustomValidity('Телефон должен состоять из 11 цифр');
  } else {
    phoneInput.style.borderColor = '#E1E1E1';
    phoneInput.setCustomValidity('');
  }
});

export {initValidatePhone};
