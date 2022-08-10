import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const ready = require('../../js/utils/documentReady.js');

ready(function() {
  if (document.querySelector('.product-list')) {

    var sliderMain = tns({
      container: '.product-list',
        items: 1,
        slideBy: 1,
        mouseDrag: true,
        controls: true,
        nav: false,
        loop: false,
        responsive: {
          700: {
            items: 2,
            slideBy: 1,
            gutter: 20
          },
          1024: {
            items: 3,
          },
          1440: {
            gutter: 32
          }
        }
    });

  }

});
