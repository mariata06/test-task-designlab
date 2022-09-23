import {initCalculateArea} from './modules/init-calculate-area';
import {initGallerySlider} from './modules/init-gallery-slider';
import {initPriceRange} from './modules/init-price-range';
import {initValidateEmail} from './modules/init-validate-email';
import {initValidatePhone} from './modules/init-validate-phone';
import {initInputTags} from './modules/init-input-tags';
import {initCustomSelect} from './modules/init-custom-select';
import {initUploadFiles} from './modules/init-upload-files';
import {initModal} from './modules/init-modal';
import {initSmoothScroll} from './modules/init-smooth-scroll';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  initCalculateArea();
  initPriceRange();
  initSmoothScroll();

  window.addEventListener('load', () => {
    initGallerySlider();
    initValidateEmail();
    initValidatePhone();
    initInputTags();
    initCustomSelect();
    initUploadFiles();
    initModal();
  });
});
