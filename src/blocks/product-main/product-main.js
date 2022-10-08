const ready = require('../../js/utils/documentReady.js');
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const closest = require('closest');
var MicroModal = require("../../../node_modules/micromodal/dist/micromodal");


ready(function() {
  if (document.querySelector('#product-main') && document.querySelector('#product-previews')) {

    var productMain = tns({
      container: '#product-main',
      items: 1,
      slideBy: 1,
      mouseDrag: false,
      controlsContainer: '.product-main__controls',
      nav: false,
    });

    var productPreviews = tns({
      container: '#product-previews',
      items: 3,
      slideBy: 1,
      mouseDrag: false,
      controlsContainer: '.product-main__previews-controls',
      nav: false,
      center: true
    });


    var transition = false;

    var syncMain = function(info, eventName) {
      // direct access to info object
      if (!transition) {
        transition = true;
        productPreviews.goTo(info.index);
        transition = false;
      }
    }

    var syncPreviews = function(info, eventName) {
      // direct access to info object
      if (!transition) {
        transition = true;
        productMain.goTo(info.index);
        transition = false;
      }
    }


    document.querySelector('#product-previews').addEventListener('click',function(event) {
      // console.log('#product-previews click');
      var item = closest(event.target,'.product-main__previews-item');
      var index = +item.dataset.slide;
      var info = productPreviews.getInfo();
      var displayIndex = (info.displayIndex <= info.slideCount) ? info.displayIndex - 1 : 0;
      //   console.log(info);
      // console.log(displayIndex);
      // console.log(index);
      if (item && !(typeof index === 'undefined') && index != displayIndex) {
        if (index < displayIndex && displayIndex != info.slideCount - 1) {
          productPreviews.goTo('prev');
        } else {
          productPreviews.goTo('next');
        }
      }
    })


    productMain.events.on('transitionStart', function(info) {
      syncMain;
    });
    productPreviews.events.on('transitionStart', function(info) {
      // console.log('previews transitionStart');
      // console.log(info);
      syncPreviews;
    });
  }

  var options = {
    openTrigger: 'data-modal-open',
    closeTrigger: 'data-modal-close',
    openClass: 'is-open',
    onShow: modal => modalOnShow(),
    onClose: modal => modalOnClose(),
  };

  MicroModal.init(options);

  var modalOnShow = function() {
    document.body.classList.add('modal-open');
  };

  var modalOnClose = function() {
    document.body.classList.remove('modal-open');
  };

  // MicroModal.show('modal-ask-doctor');
});
