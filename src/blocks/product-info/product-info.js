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


    document.addEventListener('lazybeforeunveil', function(e) {

      // (async () => {
      //   // await new Promise(resolve => setTimeout(() => resolve('1'), 1000))
      //  await import('https://cdn.scaleflex.it/plugins/js-cloudimage-360-view/3.0.3/js-cloudimage-360-view.min.js')
      //   .then( (result) => {
      //     console.log('result: ' + result);
      //   })
      // })();
      if (e.target.dataset.folder != 'undefined') {
        var width = e.target.dataset.width;
        console.log(e.target);
        // console.log(e);
        // console.log(width);
        // console.log(document.documentElement.clientWidth);
        // var slide = closest(e.target, '.tns-item');
        // console.log(slide);
        if (width && document.documentElement.clientWidth >= width && closest(e.target, '.tns-item').classList.contains('tns-slide-active')) {
          console.log('1');
          if (window.CI360._viewers.length = 0) {
            window.CI360.init();
          }
          e.target.classList.add('cloudimage-360');
          window.CI360.add(e.target.id);
        }
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
        // if (!viewContent.classList.contains('.cloudimage-360')) {
        // }
      }
    }




    //range
    // var range = document.querySelector('.product-info__range');
    // var cloudImage = document.querySelector('.product-info__view-content');
    // range.setAttribute('min', 1);
    // range.setAttribute('max', cloudImage.getAttribute('data-amount-x'));
    // var btnLeft = document.querySelector('.cloudimage-360-left');
    // var btnRight = document.querySelector('.cloudimage-360-right');
    // console.log(btnLeft);
    // console.log(btnRight);
    // var prevRangeValue = 1;

    // function onRangeInput(range) {
    //   event.preventDefault();
    //   if (prevRangeValue < range.value) {
    //     btnRight.dispatchEvent(new Event('mousedown'));
    //     setTimeout(btnRight.dispatchEvent(new Event('mouseup')),100);
    //   }
    //   else {
    //     btnLeft.dispatchEvent(new Event('mousedown'));
    //     setTimeout(btnLeft.dispatchEvent(new Event('mouseup')),100);
    //   }
    //   prevRangeValue = range.value;
    // }

    // onRangeInput(range);

    // range.addEventListener('input', function(event) {
    //   onRangeInput(this);
    // });

    // console.log(window.CI360);



    // var element = document.getElementById('testButton');
    // if (document.createEvent) {
    //   element.dispatchEvent(new Event('mousedown'));
    // } else {
    //   // Internet Explorer (I think)
    //   element.fireEvent("onmousedown", event);
    // }

    // var test = document.querySelector('.product-info__test');
    // test.addEventListener('click', function(event) {
    //   var element = document.querySelector('.cloudimage-360-left');
    //   if (document.createEvent) {
    //     element.dispatchEvent(new Event('mousedown'));
    //   } else {
    //     // Internet Explorer (I think)
    //     element.fireEvent("onmousedown", event);
    //   }
    //   if (document.createEvent) {
    //     element.dispatchEvent(new Event('mouseup'));
    //   } else {
    //     // Internet Explorer (I think)
    //     element.fireEvent("onmouseup", event);
    //   }
    // })


  }
});
