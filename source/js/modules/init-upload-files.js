const initUploadFiles = () => {
  let form = document.querySelector('form');
  let inputUplod = form.querySelector('.input-wrapper__upload');
  let projectFiles = form.querySelector('.ad-form__input');
  const fileTypes = [
    'image/jpeg'
  ];

  let validateFileType = function (file) {
    return fileTypes.some(function (type) {
      return file.type === type;
    });
  };

  // let isEmptyAddFiles = true;

  projectFiles.addEventListener('change', function () {
    let selectedFile = projectFiles.files[0];
    if (!validateFileType(selectedFile)) {
      projectFiles.setCustomValidity('Должны быть файлы jpg');
    } else {
      projectFiles.setCustomValidity('');

      let isEmptyAddFiles = true;
      let divAddFiles;
      if (window.validation.isEmptyAddFiles) {
        divAddFiles = inputUplod.querySelector('.input-wrapper__files');
        handleFiles(selectedFile, divAddFiles, false);
        window.validation.isEmptyAddFiles = false;
      } else {
        divAddFiles = document.createElement('div');
        divAddFiles.classList.add('ad-form__files');
        inputUplod.appendChild(divAddFiles);
        let addFormFiles = inputUplod.querySelectorAll('.input-wrapper__files');
        handleFiles(selectedFile, addFormFiles[addFormFiles.length - 1], false);
      }
    }
  });

  function handleFiles(file, divAddFiles) {
    let fileName = document.createElement('p');
    fileName.classList.add('input-wrapper__project-file');

    fileName.height = divAddFiles.offsetHeight;
    fileName.width = divAddFiles.offsetWidth;
    divAddFiles.appendChild(fileName);

    let reader = new FileReader();
    reader.onload = function (e) {
      fileName.src = e.target.result;
    };

    reader.readAsDataURL(file);
  }
};

export {initUploadFiles};
