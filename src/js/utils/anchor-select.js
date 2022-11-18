const ready = require('../../js/utils/documentReady.js');

ready(function() {
  console.log('anchor-select.js');

  //--scroll
  var select = document.querySelector('select[data-select-anchor]');
  if (select) {
    select.addEventListener('change',function(event) {
      var target = document.querySelector(this.value);
      if (target) {
        var headerHeight = document.querySelector('.page-header').clientHeight;
        var viewportOffset = target.getBoundingClientRect();
        var targetPos = viewportOffset.top + window.scrollY - headerHeight - 10;
        scrollToSmoothly(targetPos,300);
      }
    })
  }

  var tabs = document.querySelectorAll('[data-tabs-anchor]');
  console.log(tabs);
  var onePage = document.getElementsByClassName('onepage-wrapper');
  if (onePage.length == 0) {
    for (var tab of tabs) {
        tab.addEventListener('click',function(event) {
          tabScroll(event);
        });
    }
  }

  function tabScroll(event) {
    event.preventDefault();
    if (event.target.dataset.anchor) {
      var target = document.querySelector(event.target.dataset.anchor);
      if (target) {
        var headerHeight = document.querySelector('.page-header').clientHeight;
        var viewportOffset = target.getBoundingClientRect();
        var targetPos = viewportOffset.top + window.scrollY - headerHeight - 10;
        scrollToSmoothly(targetPos,300);
      }
    }
  }

  function scrollToSmoothly(pos, time) {
    var currentPos = window.pageYOffset;
    var start = null;
    if (time == null) time = 500;
    pos = +pos, time = +time;
    window.requestAnimationFrame(function step(currentTime) {
      start = !start ? currentTime : start;
      var progress = currentTime - start;
      if (currentPos < pos) {
        window.scrollTo(0, ((pos - currentPos) * progress / time) + currentPos);
      } else {
        window.scrollTo(0, currentPos - ((currentPos - pos) * progress / time));
      }
      if (progress < time) {
        window.requestAnimationFrame(step);
      } else {
        window.scrollTo(0, pos);
      }
    });
  }
});
