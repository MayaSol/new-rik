const ready = require('../../js/utils/documentReady.js');
var MicroModal = require("../../../node_modules/micromodal/dist/micromodal");
// var MicroModal = require("../../js/micromodal.js");
const Collapse = require("./catalog-collapse.js");

ready(function() {

  if (document.documentElement.clientWidth >= 1280) {
    var filterBtns = document.querySelectorAll('#modal-catalog-filter .form-filter__item-content');
    var bsCollapse = [];
    for (var i=0; i<filterBtns.length; i++) {
      filterBtns[i].addEventListener('show.bs.collapse',function() {
        console.log('show.bs.collapse');
        console.log(this);
      })
    }
    for (var i=0; i<filterBtns.length; i++) {
      bsCollapse[i] = Collapse.getOrCreateInstance(filterBtns[i]);
    }
    for (var i=0; i<bsCollapse.length; i++) {
      bsCollapse[i].show();
    }
  }

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
    var filters = document.querySelectorAll('.form-filter .form-filter__item-content');
    var result =  [...filters].reduce((prev, cur, i, filters) => {
      // console.log(filters[i].dataset.active);
      // console.log(prev || (filters[i].dataset.active ? filters[i].dataset.active : false));
      return prev || (filters[i].dataset.active ? filters[i].dataset.active : false);
    }, false);
    // console.log('result = ' + result);
    return result;
  }

});


// function onShow(modal) {
//   console.log('onShow');

// }


// function onClose(modal) {
//   console.log('onClose');
// }
