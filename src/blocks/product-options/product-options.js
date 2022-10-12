const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');
// const Сhoices = require('choices.js');

ready(function() {
  // var options = document.querySelectorAll('.product-options__select');
  // for (select of options) {
  //   var choices = new Сhoices(select);
  // }

  const LABEL_AMOUNT_SELECTOR = '.product-options__amount';
  const LABEL_CLEAR_SELECTOR = '.product-options__label--clear';
  const labelClear = document.querySelector(LABEL_CLEAR_SELECTOR);
  const labelAdd = document.querySelector('.product-options__lbl-add');
  const labelChange = document.querySelector('.product-options__lbl-change');

  var btnClear = document.querySelector(LABEL_CLEAR_SELECTOR + ' button');
  if (btnClear) {
    btnClear.addEventListener('click', function(event) {
      console.log('click');
      event.stopPropagation();
      var inputs = document.querySelectorAll('.form--options .field-checkbox__input');
      console.log(inputs);
      for (input of inputs) {
        input.checked = false;
        input.dispatchEvent(new Event("change"));
      }
      if (inputs.length > 0) {
        var labelAmount = document.querySelector(LABEL_AMOUNT_SELECTOR);
        labelAmount.innerText = `0 доп. опции`;
        labelClear.classList.add('hidden');
        labelAdd.classList.remove('hidden');
        labelChange.classList.add('hidden');
      }
    })
  }

  var inputOptions = document.querySelectorAll('.form--options .field-checkbox__input');
  var amount = 0;;
  for (input of inputOptions) {
    if (input.checked) {
      amount += 1;
    }
    input.addEventListener('change', function(event) {
      console.log('change');
      var item = this.closest('.product-options__item');
      console.log(item);
      if (this.checked) {
        item.classList.add('product-options__item--checked');
      } else {
        item.classList.remove('product-options__item--checked');
      }
    })
  }
  if (amount > 0) {
    var labelAmount = document.querySelector(LABEL_AMOUNT_SELECTOR);
    labelAmount.innerText = `${amount}  доп. опции`;
    labelClear.classList.remove('hidden');
    labelAdd.classList.add('hidden');
    labelChange.classList.remove('hidden');
  }


});
