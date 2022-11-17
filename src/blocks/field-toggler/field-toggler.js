const ready = require('../../js/utils/documentReady.js');
import IMask from 'imask';

ready(function() {
  var togglers = document.querySelectorAll('.field-toggler[data-target]');
  for (let toggler of togglers) {
    console.log(toggler);
    let target = toggler.dataset.target;
    let toggleClass = toggler.dataset.toggle;
    let input = toggler.getElementsByTagName('input')[0];
    console.log(input);
    console.log(input.checked);
    let targetEl = document.querySelector(target);
    if (input.checked) {
      targetEl.classList.add(toggleClass);
    }
    toggler.getElementsByTagName('input')[0].addEventListener('change',function(event) {
      console.log(target);
      console.log(toggleClass);
      targetEl.classList.toggle(toggleClass);
    })
  }
});
