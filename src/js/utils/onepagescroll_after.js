const ready = require('./documentReady.js');
import tippy from 'tippy.js';

ready(function() {
  var paginate = document.querySelector('.onepage-pagination');
  if (paginate) {
    var paginateLinks = paginate.querySelectorAll('a');
    for (var link of paginateLinks) {
      if (link.dataset.index == 1) {
        link.dataset.tippyContent = 'Начало страницы';
      } else {
        var section = document.querySelector(`section[data-index="${link.dataset.index}"]`);
        if (section) {
          var title = section.querySelector('.section__title');
          if (title) {
            link.dataset.tippyContent = title.innerText;
          }
        }
      }
    }
    tippy(paginateLinks, {
      placement: 'right'
    });
  }

});
