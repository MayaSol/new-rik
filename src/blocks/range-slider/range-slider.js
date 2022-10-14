const ready = require('../../js/utils/documentReady.js');
import noUiSlider from 'nouislider';
const closest = require('closest');

ready(function() {


  var sliderCatalog = document.querySelector('.range-slider--catalog');
  if (sliderCatalog) {

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
    // console.log(inputFrom);


    sliderCatalog.noUiSlider.on('update', function(values, handle) {
      // console.log("noUiSlider.on('update'");

      var value = values[handle];
      var inputEl = (handle) ? inputTo : inputFrom;

      inputEl.value = parseInt(value);
      setViewField(inputEl);

      let parent = inputEl.closest('.form-filter__item-content');
      if (handle) {
        if (+inputEl.value.replace(/\s/g, '') < +range.max) {
          inputEl.dataset.active = true;
        } else {
          inputEl.removeAttribute('data-active');
        };
        if (checkboxGroup(parent)) {
          parent.dataset.active = 'true';
        } else {
          parent.removeAttribute('data-active');
        }
      } else {
        if (+inputEl.value.replace(/\s/g, '') > +range.min) {
          inputEl.dataset.active = true;
        } else {
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
      console.log(this.value);
      setViewField(this);
    });

    inputTo.addEventListener('change', function() {
      console.log('on input ' + event.target);
      sliderCatalog.noUiSlider.set([null, this.value]);
      setViewField(this);
    });

    inputFrom.addEventListener('blur',function(event) {
      fromInput(event.target);
    });

    inputTo.addEventListener('blur',function(event) {
      fromInput(event.target);
    });

    function checkboxGroup(groupEl) {
      // console.log('checkbosGroup');
      // console.log(groupEl);
      var inputs = groupEl.querySelectorAll('input');
      var filterActive = [...inputs].reduce((prev, cur, i, inputs) => {
        return prev || (inputs[i].dataset.active ? inputs[i].dataset.active : false);
      }, false);
      return filterActive;
    }

    //!!!
    var viewFields = document.querySelectorAll('.field-text__view-input');
    console.log(viewFields);
    for (var view of viewFields) {
      view.addEventListener('click',function(event) {
        toInput(event);
      });
      view.addEventListener('focus',function(event) {
        toInput(event);
      });
    }

    function toInput(event) {
      event.target.classList.add('hidden');
      var parent = event.target.parentNode;
      var input = event.target.parentNode.querySelector('input');
      input.focus();
    }

    function fromInput(input) {
      var inputView = input.closest('.field-text__input-wrap').querySelector('.field-text__view-input');
      if (inputView) {
        inputView.classList.remove('hidden');
      }
    }

    function setViewField(input) {
      var viewInput = input.closest('.field-text__input-wrap').querySelector('.field-text__view-input');
      if (viewInput) {
        viewInput.value = new Intl.NumberFormat('ru-RU').format(parseInt(input.value));
      }
    }

  }
});
