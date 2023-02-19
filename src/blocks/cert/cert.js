const ready = require('../../js/utils/documentReady.js');
import lightGallery from 'lightgallery';

ready(function() {
  var items = document.getElementsByClassName('cert__item');
  for (var item of items) {
    lightGallery(item, {
      selector: '.cert__img'
    });
  }
});
