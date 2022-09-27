import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const ready = require('../../js/utils/documentReady.js');
var throttle = require('lodash.throttle');


ready(function() {

  var sliderOffice;

  if (document.querySelector('.office')) {
    // if (!sliderOffice || !sliderOffice.version) {

    sliderOffice = tns({
      container: '.office',
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
        },
        1024: {
          items: 1,
          slideBy: 1,
          gutter: 0,
        },
        1280: {
          items: 2,
          slideBy: 1,
          gutter: 32,
        },
      }
    });


    var range = document.querySelector('.office__range');

    setupSliderRange();
    window.addEventListener('resize', throttle(setupSliderRange, 500));
  }


  function setupSliderRange() {
    if (document.querySelectorAll('.office .tns-slide-active').length == document.querySelectorAll('.office .tns-item').length) {
      range.style.display = "none";
    } else {
      range.style.display = "block";
      range.value = "1";
    }
    sliderOffice.goTo('first');
    var info = sliderOffice.getInfo();

    if (range.style.display != "none") {
      range.value = info.index;
      var slideCount = info.slideCount ? info.slideCount : info.slideCountNew;
      var divider;
      if (slideCount == 3 && info.items == 2) {
        divider = 1.5;
      } else {
        divider = parseInt(slideCount / info.items);
      }
      var thumbLengh = range.clientWidth / divider;
      var thumbSelectors = ['::-webkit-slider-thumb', '::-moz-range-thumb', '::-ms-thumb '];
      var css = '';
      for (var selector of thumbSelectors) {
        css = css + ` .office__range${selector} { width: ${thumbLengh}px; } `;
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
      range.setAttribute('max', (info.items == 1) ? info.slideCount : info.slideCount - 1);

      range.addEventListener('input', function(event) {
        sliderOffice.goTo(this.value - 1);
      })

      if (document.documentElement.clientWidth < 700) {
        sliderOffice.events.on('transitionEnd', function() {
          var info = sliderOffice.getInfo();
          range.value = info.index + 1;
        });
      }
    }
  };
  // }
  // else {

  //   if (sliderOffice && sliderOffice.destroy) {
  //     sliderOffice.destroy();
  //   }
  // }
  //if (!sliderOffice || !sliderOffice.version)
}); // function setupSlider()
