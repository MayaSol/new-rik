import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const ready = require('../../js/utils/documentReady.js');

ready(function(){
  let screen = document.documentElement.clientWidth;
  if (screen < 768 && document.querySelector('.features__list')) {
      var sliderFeatures = tns({
        container: '.features__list',
        items: 1,
        slideBy: 1,
        mouseDrag: true,
        controls: true,
        nav: false,
        responsive: {
          680: {
            items: 2,
            slideBy: 2,
          }
        }
    });
  }
});
