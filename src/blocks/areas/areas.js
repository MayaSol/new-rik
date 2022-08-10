import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const ready = require('../../js/utils/documentReady.js');

ready(function() {
  if (document.querySelector('.areas__inner') && document.documentElement.clientWidth < 1280) {

    var sliderView = tns({
      container: '.areas__inner',
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
      }
    });
  }
});
