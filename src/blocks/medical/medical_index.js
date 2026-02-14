import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const ready = require('../../js/utils/documentReady.js');
var MicroModal = require("../../../node_modules/micromodal/dist/micromodal");

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


  var options = {
    openTrigger: 'data-modal-open',
    closeTrigger: 'data-modal-close',
    openClass: 'is-open',
    onShow: modal => modalOnShow(),
    onClose: modal => modalOnClose(modal),
  };

  MicroModal.init(options);

  var modalOnShow = function() {
    document.body.classList.add('modal-open');
    document.body.classList.add('disabled-onepage-scroll');
  };

  var modalOnClose = function(modal) {
    document.body.classList.remove('modal-open');
    document.body.classList.remove('disabled-onepage-scroll');
  };

});