const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');
const makeEllipsis = require('../../js/utils/ellipsis.js');

ready(function() {
 var curePage = document.getElementsByClassName('cure ')[0];
 console.log('curePage: ');
 console.log(curePage);
 if (curePage) {
  var btnShow = curePage.getElementsByClassName('btn--show-more')[0];
  btnShow.addEventListener('click',function(event) {
    console.log('btnShow click');
    console.log(this);
    showMore(event,this);
  });
 }

 function showMore(event,btn) {
  console.log('showMore');
  var preview = curePage.getElementsByClassName('article-preview__list')[0];
  if (preview.classList.contains('article-preview__list--show-all')) {
    preview.classList.remove('article-preview__list--show-all');
  }
  else {
    preview.classList.add('article-preview__list--show-all');
    makeEllipsis('.article-preview:nth-child(n+3) .article-preview__ellipsis--cure');
    if (!btn.classList.contains('lg_!hidden')) {
      btn.classList.add('lg_!hidden');
    }
  }
 }
});
