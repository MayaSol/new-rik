const ready = require('../../js/utils/documentReady.js');
import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const makeEllipsis = require('../../js/utils/ellipsis.js');
const closest = require('closest');


ready(function() {
  var sliderEl = document.querySelector('.article-preview__list');
  if (sliderEl) {
    console.log(document.documentElement.clientWidth);
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
      var slider = tns({
        container: '.article-preview__list',
        items: 2,
        slideBy: 1,
        mouseDrag: true,
        controls: true,
        nav: false,
        loop: false,
        preventScrollOnTouch: 'force',
        "autoWidth": true,
        gutter: 32,
        onInit: function() {
          makeArticleEllipsis();
        }
      });
    }
  }

});


function makeArticleEllipsis() {


  var articleEllipsis = document.querySelectorAll('.article-preview__ellipsis');
  for (el of articleEllipsis) {
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

window.addEventListener('resize',makeArticleEllipsis);
