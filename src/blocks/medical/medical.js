import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const ready = require('../../js/utils/documentReady.js');

ready(function() {
    console.log('ready medical');
  if (document.querySelector('#medical-list-main')) {
    console.log('ready medical 1');

    var sliderMedical = tns({
      container: '#medical-list-main',
        items: 1,
        slideBy: 1,
        mouseDrag: true,
        controls: true,
        nav: false,
        loop: false,
        responsive: {
          600: {
            items: 2,
          },
          768: {
            items: 3,
          },
          1024: {
            items: 4,
          },
          1440: {
            gutter: 32
          }
        }
    });

  }

  if (document.querySelector('#medical-list-product')) {
    console.log('ready medical 1');

    var sliderMedicalProduct = tns({
      container: '#medical-list-product',
        items: 1,
        slideBy: 1,
        mouseDrag: true,
        controls: true,
        nav: false,
        loop: false,
        responsive: {
          600: {
            items: 2,
          },
          768: {
            items: 3,
          },
          1024: {
            items: 4,
          },
          1280: {
            gutter: 32,
          },
          1440: {
            gutter: 10
          }
        }
    });

  }

  if (document.querySelector('#medical-list-catalog')) {
    console.log('ready medical catalog');

    var sliderMedicalProduct = tns({
      container: '#medical-list-catalog',
        items: 1,
        slideBy: 1,
        mouseDrag: true,
        controls: true,
        nav: false,
        loop: false,
        responsive: {
          600: {
            items: 2,
          },
          768: {
            items: 3,
          },
          1024: {
            items: 4,
          },
          1280: {
            gutter: 32,
          },
          1440: {
            gutter: 18
          },
          1800: {
            items: 6
          }
        }
    });

  }


});