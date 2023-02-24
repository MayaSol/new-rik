const ready = require('../../js/utils/documentReady.js');
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const closest = require('closest');
var MicroModal = require("../../../node_modules/micromodal/dist/micromodal");
import lightGallery from 'lightgallery';


ready(function() {
  if (document.querySelector('#product-main') && document.querySelector('#product-previews')) {

    var productMain = tns({
      container: '#product-main!!!!',
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
      center: true,
      freezable: false,
      responsive: {
        768: {
          items: 5,
        },
        1024: {
          items: 5,
          center: true
        },
        1440: {
          items: 6,
          center: false
        }
      }
    });


    var transition = false;

    var syncMain = function(info, eventName) {
      console.log('syncMain');
      console.log(transition);
      console.log(info);
      // direct access to info object
      if (!transition) {
        console.log('syncMain 1');
        console.log(info.slideItems[info.index].dataset.slide);
        transition = true;
        productPreviews.goTo(+info.slideItems[info.index].dataset.slide);
        transition = false;
      }
    }

    var syncPreviews = function(info, eventName) {
      console.log('syncPreviews');
      console.log(transition);
      // direct access to info object
      if (!transition) {
        console.log('syncPreviews 1');
        console.log(info.slideItems[info.index].dataset.slide);
        transition = true;
        productMain.goTo(+info.slideItems[info.index].dataset.slide);
        transition = false;
      }
    }


    document.querySelector('#product-previews').addEventListener('click', function(event) {
      console.log('#product-previews click');
      var item = closest(event.target, '.product-main__previews-item');
      var index = +item.dataset.slide;
      productPreviews.goTo(index);
      // var info = productPreviews.getInfo();
      // // var displayIndex = (info.displayIndex <= info.slideCount) ? info.displayIndex - 1 : 0;
      // console.log(item);
      // console.log(index);
      // console.log(displayIndex);
      // if (item && !(typeof index === 'undefined') && index != displayIndex) {
      //   if (index < displayIndex && displayIndex != info.slideCount - 1) {
      //     console.log('1');
      //     productPreviews.goTo('prev');
      //   } else {
      //     console.log('2');
      //     productPreviews.goTo('next');
      //   }
      // }
    })


    productMain.events.on('transitionStart', function(info) {
      console.log('productMain transitionStart');
      syncMain(info);
    });
    productPreviews.events.on('transitionStart', function(info) {
      console.log('productPreviews transitionStart');
      // console.log('previews transitionStart');
      // console.log(info);
      syncPreviews(info);
    });
    productPreviews.events.on('indexChanged', function(info) {
      // console.log('productPreviews indexChanged');
    });

    var productMainEl = document.getElementById('product-main');
    lightGallery(productMainEl, {
      selector: '.product-main__poster',
    })
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
  };

  const LABEL_CLEAR_SELECTOR = '.product-options__label--clear';
  const labelClear = document.querySelector(LABEL_CLEAR_SELECTOR);
  const labelAdd = document.querySelector('.product-options__lbl-add');
  const labelChange = document.querySelector('.product-options__lbl-change');


  var modalOnClose = function(modal) {
    document.body.classList.remove('modal-open');
    if (modal.id == 'modal-options') {
      var checkedOptionsCount = modal.querySelectorAll('.product-options__item--checked').length;
      var labelAmount = document.querySelector('.product-options__amount');
      labelAmount.innerText = `${checkedOptionsCount} доп. опции`;
      if (checkedOptionsCount === 0) {
        labelClear.classList.add('hidden');
        labelAdd.classList.remove('hidden');
        labelChange.classList.add('hidden');
      }
      else {
        labelClear.classList.remove('hidden');
        labelChange.classList.remove('hidden');
        labelAdd.classList.add('hidden');
      }
    }
  };


    // lightGallery(item, {
    //   selector: '.cert__img'
    // });

});
