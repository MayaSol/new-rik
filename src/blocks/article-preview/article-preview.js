const ready = require('../../js/utils/documentReady.js');
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const makeEllipsis = require('../../js/utils/ellipsis.js');
const closest = require('closest');


ready(function() {
  var sliderEl = document.querySelector('.article-preview__list');
  if (sliderEl) {
    if (document.documentElement.clientWidth < 1440) {
      var slider = tns({
        container: '.article-preview__list',
        items: 1,
        slideBy: 1,
        mouseDrag: true,
        controls: true,
        nav: false,
        loop: false,
        preventScrollOnTouch: 'force',
        responsive: {
          700: {
            items: 2,
            slideBy: 1,
            gutter: 20
          },
        }
      });
    } else {
      var autoWidth = (document.documentElement.classList.contains('index')) ? true : false;
      var responsive = (document.documentElement.classList.contains('index')) ? {} : {
          1440: {
            items: 3,
          },
        };

        console.log(autoWidth);

      var slider = tns({
        container: '.article-preview__list',
        items: 2,
        slideBy: 1,
        mouseDrag: true,
        controls: true,
        nav: false,
        loop: false,
        preventScrollOnTouch: 'force',
        "autoWidth": autoWidth,
        gutter: 32,
        responsive: responsive,
        onInit: function() {
          makeArticleEllipsis();
        }
      });
    }

    slider.events.on('transitionStart', function(info) {
      if (info.displayIndex > 1) {
        sliderEl.classList.add('not-first-page');
      } else {
        sliderEl.classList.remove('not-first-page');
      }
    });

    // slider.events.on('transitionEnd', function(info) {
    //   var btnNext = info.controlsContainer.querySelector('button[data-controls="next"]');
    //   if (info.slideCount - info.displayIndex <= 2) {
    //     btnNext.setAttribute('disabled', '');
    //   } else {
    //     btnNext.removeAttribute('disabled');
    //   }
    // });
  }

});


function makeArticleEllipsis() {


  var articleEllipsis = document.querySelectorAll('.article-preview__ellipsis');
  for (var el of articleEllipsis) {
    var hiddenText = closest(el, '.article-preview__content').querySelector('.hidden');
    // console.log(closest(el, '.article-preview__content'));
    // console.log('hidden: ');
    // console.log(hiddenText);
    if (hiddenText) {
      el.innerHTML = hiddenText.innerHTML;
    } else {
      let div = document.createElement('div');
      div.className = 'hidden';
      div.innerHTML = el.innerHTML;
      let parent = closest(el, '.article-preview__content');
      // console.log(parent);
      parent.append(div);
    }
  }
  makeEllipsis('.article-preview__ellipsis');
}

window.addEventListener('resize', makeArticleEllipsis);
