const initValidateEmail = () => {
  const emailRegex = /^[^\s@]+@[^\s@]+$/;
  // const emailRegex = /^[-\w.]+@([\w\-\_]+\.)+[A-z]{2,11}$/i;
  // const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  const cyrillicPattern = /^[\u0400-\u04FF]+$/;
  const emailInput = document.querySelector('input[type="email"]');
  let btnDelete = document.querySelector('.input__delete');
  // console.log(btnDelete);
  // const inputError = document.querySelector('.subscribe__form-error');
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
      // inputError.classList.remove('show');
    }

    // else if (validateEmail(emailInput.value === '')) {
    //   emailInput.style.borderColor = '#0066CC';
    // }

    if (detectError(emailInput.value)) {
      emailInput.style.borderColor = '#DC3545';
      btnDelete.style.visibility = 'visible';
    }

    // else {
    //   emailInput.style.borderColor = '#DC3545';
    //   btnDelete.style.visibility = 'visible';
    // }
  }

  // function resetInput(target) {
  //   target.value = '';
  // }

  btnDelete.addEventListener('click', () => {
    // updateInput();
    emailInput.style.borderColor = '#0066CC';
    btnDelete.style.visibility = 'hidden';
    // validateEmail(emailInput.value === '');
    // console.log(emailInput.value);
    // resetInput();
  });

  if (emailInput) {
    emailInput.addEventListener('input', updateInput);
    // emailInput.style.borderColor = '#0066CC';
  }
};

export {initValidateEmail};
