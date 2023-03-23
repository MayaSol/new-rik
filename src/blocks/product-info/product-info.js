import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');

ready(function() {
  if (document.querySelector('.product-info__views-list') && document.querySelector('.product-info__text-list')) {

    var sliderView = tns({
      container: '.product-info__views-list',
      items: 1,
      slideBy: 1,
      mouseDrag: false,
      controls: true,
      nav: false,
      loop: false,
      preventScrollOnTouch: 'force',
      touch: false,
    });

    var sliderText = tns({
      container: '.product-info__text-list',
      items: 1,
      slideBy: 1,
      mouseDrag: false,
      controls: false,
      nav: false,
      loop: false,
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

    sliderView.events.on('transitionStart', function(info) {
      syncText;
      init3dView(info);
    });
    sliderText.events.on('transitionStart', syncView);

    var scriptInitialized = false;

    document.addEventListener('lazybeforeunveil', function(e) {
      console.log('lazybeforeunveil');
      console.log(scriptInitialized);

      var lazeloadedEl = e.target;
      console.log(e.target);

      if (typeof e.target.dataset.folder != 'undefined' && !scriptInitialized) {
          var script = document.getElementById('cloudimage-script');
          if (script) {
            script.addEventListener('load', function(e) {
              console.log('script loaded');
              console.log(e.target);
              console.log(lazeloadedEl);
              var width = lazeloadedEl.dataset.width;
              if (width && document.documentElement.clientWidth >= width && closest(lazeloadedEl, '.tns-item').classList.contains('tns-slide-active')) {
                console.log('1');
                if (window.CI360._viewers.length = 0) {
                  window.CI360.init();
                }
                lazeloadedEl.classList.add('cloudimage-360');
                window.CI360.add(lazeloadedEl.id);
              }
            })
            var src = script.getAttribute('delay');
            script.setAttribute('src',src);
          }
          scriptInitialized = true;
      }
    });

    function init3dView(info) {
      console.log('init3dView');
      // console.log(info);
      // console.log(info.slideItems[info.displayIndex-1]);
      console.log(info);
      var viewContents = info.slideItems[info.displayIndex - 1].querySelectorAll('.product-info__view-content');
      console.log(viewContents);
      for (var content of viewContents) {
        if (
          !content.classList.contains('.cloudimage-360') &&
          content.dataset.width &&
          document.documentElement.clientWidth >= content.dataset.width
        ) {
          console.log('2');
          content.classList.add('cloudimage-360');
          window.CI360.add(content.id);
        }
      }
    }



  }
});
