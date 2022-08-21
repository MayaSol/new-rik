import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const ready = require('../../js/utils/documentReady.js');

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
      // responsive: {
      //   700: {
      //     items: 2,
      //     slideBy: 1,
      //     gutter: 20
      //   },
      //   1024: {
      //     items: 1,
      //     gutter: 0
      //   },
      //   1440: {
      //     items: 1,
      //     gutter: 0
      //   }
      // }
    });

    var sliderText = tns({
      container: '.product-info__text-list',
      items: 1,
      slideBy: 1,
      mouseDrag: false,
      controls: false,
      nav: false,
      loop: false,
      // responsive: {
      //   700: {
      //     items: 2,
      //     slideBy: 1,
      //     gutter: 20
      //   },
      //   1024: {
      //     items: 1,
      //     gutter: 0
      //   },
      //   1440: {
      //     items: 1,
      //     gutter: 0
      //   }
      // }
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

    // if (document.documentElement.clientWidth > 1279) {
    //     window.CI360.init();
    // }


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
