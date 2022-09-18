import {iosVhFix} from './utils/ios-vh-fix';
import {initFormValidate} from './modules/form/init-form-validate';
import {initCalculateArea} from './modules/init-calculate-area';
import {initGallerySlider} from './modules/init-gallery-slider';
import {initPriceRange} from './modules/init-price-range';
import {initValidateEmail} from './modules/init-validate-email';
import {initValidatePhone} from './modules/init-validate-phone';
import {initInputTags} from './modules/init-input-tags';
import {initCustomSelect} from './modules/init-custom-select';
// import {initSmoothScroll} from './modules/init-smooth-scroll';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();
  initCalculateArea();
  initPriceRange();
  // initSmoothScroll();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initFormValidate();
    initGallerySlider();
    initValidateEmail();
    initValidatePhone();
    initInputTags();
    initCustomSelect();
  });
});
