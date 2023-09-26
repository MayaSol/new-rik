import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const ready = require('../../js/utils/documentReady.js');
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

ready(function() {
  if (document.querySelector('.cert-slider')) {

    var sliderMain = tns({
      container: '.cert-slider',
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


    lightGallery(document.querySelector('.cert-slider'), {
        plugins: [lgZoom, lgThumbnail],
        speed: 500,
        // ... other settings
    });

  }

});
