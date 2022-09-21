import {initCalculateArea} from './modules/init-calculate-area';
import {initGallerySlider} from './modules/init-gallery-slider';
import {initPriceRange} from './modules/init-price-range';
import {initValidateEmail} from './modules/init-validate-email';
import {initValidatePhone} from './modules/init-validate-phone';
import {initInputTags} from './modules/init-input-tags';
import {initCustomSelect} from './modules/init-custom-select';
import {initModal} from './modules/init-modal';

// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {
  initCalculateArea();
  initPriceRange();

  window.addEventListener('load', () => {
    initGallerySlider();
    initValidateEmail();
    initValidatePhone();
    initInputTags();
    initCustomSelect();
    initModal();
  });
});
