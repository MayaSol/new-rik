const ready = require('../../js/utils/documentReady.js');
var MicroModal = require("../../../node_modules/micromodal/dist/micromodal");
// var MicroModal = require("../../js/micromodal.js");


ready(function() {

  const MODAL_TOGGLE_ATTR = 'data-micromodal-toggle';

  var options = {
    closeTrigger: 'data-micromodal-close',
    openClass: 'is-open'
  };

  MicroModal.init(options);


  const btns = document.querySelectorAll(`[${ MODAL_TOGGLE_ATTR }]`);
  for (btn of btns) {
    var modal = document.querySelector(`#${btn.dataset.micromodalToggle}`);
    if (modal) {
      modal.style.top = btn.offsetTop + btn.clientHeight + 'px';
      modal.micromodalBtn = btn;
    }
  }

  const filterBtn = document.querySelector('.catalog__filter');
  const toggleTriggers = [...document.querySelectorAll(`[${ MODAL_TOGGLE_ATTR }]`)];

  toggleTriggers.forEach(trigger => {
    trigger.addEventListener('click', function(event) {
      var modal = document.querySelector(`#${this.dataset.micromodalToggle}`);
      if (modal) {
        if (modal.classList.contains(options.openClass)) {
          MicroModal.close(this.dataset.micromodalToggle);
          if (modal.micromodalBtn) {
            modal.micromodalBtn.classList.remove('open');
          }
          if (checkFiltersAll()) {
            filterBtn.classList.add('catalog__filter--active');
          } else {
            filterBtn.classList.remove('catalog__filter--active');
          }
        } else {
          MicroModal.show(this.dataset.micromodalToggle);
          if (modal.micromodalBtn) {
            modal.micromodalBtn.classList.add('open');
          }
        }
      }
    })
  })



  function checkFiltersAll() {
    console.log('checkFiltersAll');
    var filters = document.querySelectorAll('.form-filter .form-filter__item-content');
    console.log(filters);
    var result =  [...filters].reduce((prev, cur, i, filters) => {
      console.log(filters[i].dataset.active);
      console.log(prev || (filters[i].dataset.active ? filters[i].dataset.active : false));
      return prev || (filters[i].dataset.active ? filters[i].dataset.active : false);
    }, false);
    console.log('result = ' + result);
    return result;
  }

});


// function onShow(modal) {
//   console.log('onShow');

// }


// function onClose(modal) {
//   console.log('onClose');
// }
