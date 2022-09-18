const initValidateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+$/;
  const cyrillicPattern = /^[\u0400-\u04FF]+$/;
  const emailInput = document.querySelector('input[type="email"]');
  let btnDelete = document.querySelector('.input-wrapper__icon--delete');

  function validateEmail(value) {
    return emailRegex.test(value);
  }

  function detectError(value) {
    return cyrillicPattern.test(value);
  }

  function updateInput() {
    if (validateEmail(emailInput.value)) {
      emailInput.style.borderColor = '#0066CC';
      btnDelete.style.visibility = 'hidden';
    }

    if (detectError(emailInput.value)) {
      emailInput.style.borderColor = '#DC3545';
      btnDelete.style.visibility = 'visible';
    }
  }

  btnDelete.addEventListener('click', () => {
    emailInput.style.borderColor = '#0066CC';
    btnDelete.style.visibility = 'hidden';
  });

  if (emailInput) {
    emailInput.addEventListener('input', updateInput);
  }
};

export {initValidateEmail};
