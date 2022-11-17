const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');
const Collapse = require("../../../node_modules/bootstrap/js/dist/collapse.js");

ready(function() {
  var collapses = document.querySelectorAll('.question__collapse');
  for (var collapse of collapses) {
    collapse.addEventListener('show.bs.collapse', function () {
      this.closest('.question__item-wrapper').classList.add('question__item-wrapper--open');
      // var siblings = this.closest('.question').querySelectorAll('.question__collpase');
      // for (var item of siblings) {
      //   if (item !=== this) {
      //     var bsCollapse = Collapse.getOrCreateInstance(item);
      //     bsCollapse.hide();
      //   }
      // }
    })
    collapse.addEventListener('hide.bs.collapse', function () {
      var item = this.closest('.question__item-wrapper');
      if (item) {
        item.classList.remove('question__item-wrapper--open');
      }
    })

  }

});
