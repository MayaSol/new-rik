import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const ready = require('../../js/utils/documentReady.js');

ready(function() {
  if (document.querySelector('.product-info__views-list') && document.querySelector('.product-info__text-list')) {

    var sliderView = tns({
      container: '.product-info__views-list',
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
          items: 1,
          gutter: 0
        },
        1440: {
          items: 1,
          gutter: 0
        }
      }
    });

    var sliderText = tns({
      container: '.product-info__text-list',
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
          gutter: 20
        },
        1024: {
          items: 1,
          gutter: 0
        },
        1440: {
          items: 1,
          gutter: 0
        }
      }
    });

    var transition = false;

    var syncText = function(info, eventName) {
      // direct access to info object
      if (!transition) {
        transition = true;
        sliderText.goTo(info.index);
        transition = false;
      }
    }

    var syncView = function(info, eventName) {
      // direct access to info object
      if (!transition) {
        transition = true;
        sliderView.goTo(info.index);
        transition = false;
      }
    }

    sliderView.events.on('transitionStart', syncText);
    sliderText.events.on('transitionStart', syncView);

  }
});
