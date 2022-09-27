const ready = require('../../js/utils/documentReady.js');

ready(function() {

  const SEL_ITEM = ".sort__item";
  const CLASS_ITEM_ACTIVE = 'sort__item--active';

  var sorts = document.querySelectorAll('.sort');
  for (sort of sorts) {
    var items = sort.querySelectorAll(SEL_ITEM);
    for (item of items) {
      item.addEventListener('click', function(event) {
        console.log(items);
        if (!this.classList.contains(CLASS_ITEM_ACTIVE)) {
          for (el of items) {
            console.log(el);
            el.classList.remove(CLASS_ITEM_ACTIVE);
          }
          this.classList.add(CLASS_ITEM_ACTIVE);
        }
      })
    }
  }

  const CLASS_SORT_ASC = 'sort-asc';

  var btnSort = document.querySelectorAll('.btn--sort');
  for (btn of btnSort) {
    btn.addEventListener('click',function() {
      if (this.classList.contains(CLASS_SORT_ASC)) {
        this.classList.remove(CLASS_SORT_ASC);
      }
      else {
        this.classList.add(CLASS_SORT_ASC);
      }
    })
  }

});
