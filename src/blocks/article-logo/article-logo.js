const ready = require('../../js/utils/documentReady.js');
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const makeEllipsis = require('../../js/utils/ellipsis.js');
const closest = require('closest');


ready(function() {
  var sliderEl = document.querySelector('.article-logo__list.slider');
  if (sliderEl) {
      var slider = tns({
        container: '.article-logo__list.slider',
        items: 2,
        gutter: 20,
        slideBy: 1,
        mouseDrag: true,
        controls: true,
        nav: false,
        loop: false,
        preventScrollOnTouch: 'force',
        responsive: {
          700: {
            items: 4,
            slideBy: 1,
          },
          1440: {
            items: 6
          }
        }
      });
  }
});



