const initInputTags = () => {
  let input = document.getElementById('wishes');
  let listArr = [];
  let newTagLi = '';

  let tagsList = document.querySelector('.tags');
  let tagsItems = tagsList.querySelectorAll('span');

  tagsItems.forEach((item, ind) => {
    listArr.push(item.textContent);
    item.querySelector('svg').addEventListener('click', () => {
      closeFunc(ind);
    });
  });

  input.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) { // enter keyboard
      if (input.value !== '') {
        let inValue = e.target.value;
        listArr = inValue.split(',');
        // listArr.push(inValue.replace(/\s/g, ''));
        newTagLi = '';
        listArr.forEach((element) => {
          newTagLi += `<span> ${element}<svg width="24" height="24" aria-hidden="true">
          <use xlink:href="#icon-delete"></use>
        </svg></span>`;
        });
        document.querySelector('.tags').innerHTML = newTagLi;
        input.value = '';
      }

      tagsList = document.querySelector('.tags');
      // tagsList.style.marginTop = '16px';
      tagsItems = tagsList.querySelectorAll('span');

      tagsItems.forEach((item, ind) => {
        item.querySelector('svg').addEventListener('click', () => {
          deleteFunc(ind);
        });
      });
    }
  });

  function deleteFunc(i) {
    listArr.splice(i, 1);
    newTagLi = '';
    listArr.forEach((element) => {
      newTagLi += `<span> ${element}<svg width="24" height="24" aria-hidden="true">
      <use xlink:href="#icon-delete"></use>
    </svg></span>`;
    });
    document.querySelector('.tags').innerHTML = newTagLi;

    tagsList = document.querySelector('.tags');
    tagsItems = tagsList.querySelectorAll('span');
    tagsItems.forEach((item, ind) => {
      item.querySelector('svg').addEventListener('click', () => {
        deleteFunc(ind);
      });
    });
    tagsList.style.marginTop = '0px';
  }
};

export {initInputTags};
