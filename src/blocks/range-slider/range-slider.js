const ready = require('../../js/utils/documentReady.js');
import noUiSlider from 'nouislider';
const closest = require('closest');

ready(function() {


  var sliderCatalog = document.querySelector('.range-slider--catalog');
  var range = {
    'min': +sliderCatalog.dataset.min,
    'max': +sliderCatalog.dataset.max
  };


  if (sliderCatalog) {
    noUiSlider.create(sliderCatalog, {
      start: [range.min, range.max],
      connect: true,
      range: range,
      step: 1000
    });
  }

  var filterPrice = document.querySelector('.form-filter__item-content--price');
  var inputFrom = filterPrice.querySelector('.field-text--price-from .field-text__input');
  var inputTo = filterPrice.querySelector('.field-text--price-to .field-text__input');
  console.log(inputFrom);


  sliderCatalog.noUiSlider.on('update', function(values, handle) {
    console.log("noUiSlider.on('update'");

    var value = values[handle];
    var inputEl = (handle) ? inputTo : inputFrom;

    inputEl.value = new Intl.NumberFormat('ru-RU').format(parseInt(value));

    let parent = inputEl.closest('.form-filter__item-content');
    if (handle) {
      if (+inputEl.value.replace(/\s/g, '') < +range.max) {
        console.log(1);
        inputEl.dataset.active = true;
      } else {
        console.log(2);
        inputEl.removeAttribute('data-active');
      };
      if (checkboxGroup(parent)) {
        parent.dataset.active = 'true';
      } else {
        parent.removeAttribute('data-active');
      }
    } else {
      if (+inputEl.value.replace(/\s/g, '') > +range.min) {
        console.log(3);
        inputEl.dataset.active = true;
      } else {
        console.log(4);
        inputEl.removeAttribute('data-active');
      };
      if (checkboxGroup(parent)) {
        parent.dataset.active = 'true';
      } else {
        parent.removeAttribute('data-active');
      }
    }

  });

  inputFrom.addEventListener('change', function() {
    sliderCatalog.noUiSlider.set([this.value, null]);
  });

  inputTo.addEventListener('change', function() {
    sliderCatalog.noUiSlider.set([null, this.value]);
  });

  function checkboxGroup(groupEl) {
    console.log('checkbosGroup');
    console.log(groupEl);
    var inputs = groupEl.querySelectorAll('input');
    var filterActive = [...inputs].reduce((prev, cur, i, inputs) => {
      return prev || (inputs[i].dataset.active ? inputs[i].dataset.active : false);
    }, false);
    console.log('checkbosGroup result: ' + filterActive);
    return filterActive;
  }


});
