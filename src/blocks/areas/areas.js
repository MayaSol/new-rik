import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const ready = require('../../js/utils/documentReady.js');
var throttle = require('lodash.throttle');


ready(function() {

  setupSlider();
  window.addEventListener('resize', throttle(setupSlider, 100));

  var sliderAreas;

  function setupSlider() {

    if (document.querySelector('.areas__inner') && document.documentElement.clientWidth < 1024) {

      if (!sliderAreas || !sliderAreas.version) {

        sliderAreas = tns({
          container: '.areas__inner',
          items: 1,
          slideBy: 1,
          mouseDrag: true,
          controls: false,
          nav: false,
          loop: false,
          responsive: {
            700: {
              items: 2,
              slideBy: 1,
              gutter: 20,
              controls: true
            },
          }
        });

        var info = sliderAreas.getInfo();

        var range = document.querySelector('.areas__range');
        range.value = info.index;
        var thumbLengh = range.clientWidth / info.slideCount;
        var thumbSelectors = ['::-webkit-slider-thumb', '::-moz-range-thumb', '::-ms-thumb '];
        var css = '';
        for (var selector of thumbSelectors) {
          css = css + ` .areas__range${selector} { width: ${thumbLengh}px; } `;
        }
        var head = document.head || document.getElementsByTagName('head')[0];
        var style = document.createElement('style');

        head.appendChild(style);

        style.type = 'text/css';
        if (style.styleSheet) {
          // This is required for IE8 and below.
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }

        range.setAttribute('min', 1);
        range.setAttribute('max', info.slideCount);

        range.addEventListener('input', function(event) {
          sliderAreas.goTo(this.value - 1);
        })

        if (document.documentElement.clientWidth < 700) {
          sliderAreas.events.on('transitionEnd', function() {
            var info = sliderAreas.getInfo();
            range.value = info.index + 1;
          });
        }
      }

    }
    else {

      if (sliderAreas && sliderAreas.destroy) {
        sliderAreas.destroy();
      }
    }
  }

});
