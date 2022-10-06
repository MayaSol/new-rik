const ready = require('../../js/utils/documentReady.js');

ready(function() {
  const linksWraps = document.querySelectorAll('.page-links');
  for (wrap of linksWraps) {
    wrap.addEventListener('click',function(event) {
      console.log(event.target);
      const links = this.querySelectorAll('.page-links__link');
      for (link of links) {
        link.classList.remove('active');
      }
      event.target.classList.add('active');
    })
  }
});
