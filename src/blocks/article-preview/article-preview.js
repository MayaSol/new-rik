const ready = require('../../js/utils/documentReady.js');
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const makeEllipsis = require('../../js/utils/ellipsis.js');
const closest = require('closest');


ready(function() {
  var sliderEl = document.querySelector('.article-preview__list.slider');
  if (sliderEl) {
    if (document.documentElement.clientWidth < 1440) {
      var slider = tns({
        container: '.article-preview__list.slider',
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
        container: '.article-preview__list.slider',
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
  }

  var sliderElLg = document.querySelector('.article-preview__list.slider-lg');
  if (sliderElLg) {
    if (document.documentElement.clientWidth < 1024) {
      var slider = tns({
        container: '.article-preview__list.slider-lg',
        items: 1,
        slideBy: 1,
        mouseDrag: true,
        controls: true,
        nav: false,
        loop: false,
        preventScrollOnTouch: 'force',
        responsive: {
          600: {
            items: 2,
            gutter: 20
          },
        }
      });
    }
  }

  makeEllipsis('.article-preview__ellipsis--cure');

  // document.querySelector('.cure .btn--show-more').addEventListener('click', function(event) {
  //   var parent = this.closest('.article-preview__list');
  //   if (parent.classList.contains('article-preview__list--show-all')) {
  //     parent.classList.remove('article-preview__list--show-all');
  //   }
  //   else {
  //     parent.classList.add('article-preview__list--show-all');
  //   }
  // })

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
