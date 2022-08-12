const ready = require('../../js/utils/documentReady.js');
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";

ready(function() {
  var sliderEl = document.querySelector('.article-preview__list');
  if (sliderEl) {
    console.log(document.documentElement.clientWidth);
    if (document.documentElement.clientWidth < 1440) {
      console.log('1');
      var slider = tns({
        container: '.article-preview__list',
        items: 1,
        slideBy: 1,
        mouseDrag: true,
        controls: true,
        nav: false,
        loop: false,
        preventScrollOnTouch: 'force',
        responsive: {
          700: {
            items: 2,
            slideBy: 1,
            gutter: 20
          },
          1024: {
            items: 3,
          },
        }
      });
    } else {
      var slider = tns({
        container: '.article-preview__list',
        items: 1,
        slideBy: 1,
        mouseDrag: true,
        controls: true,
        nav: false,
        loop: false,
        preventScrollOnTouch: 'force',
        "autoWidth": true,
        gutter: 32
      });
    }
  }

});
