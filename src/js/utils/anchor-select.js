const ready = require('../../js/utils/documentReady.js');

ready(function() {

  //--scroll
  var select = document.querySelector('select[data-select-anchor]');
  console.log(select);
  if (select) {
    select.addEventListener('change',function(event) {
      console.log(this.value);
      var target = document.querySelector(this.value);
      console.log(target);
      if (target) {
        var headerHeight = document.querySelector('.page-header').clientHeight;
        var viewportOffset = target.getBoundingClientRect();
        var targetPos = viewportOffset.top + window.scrollY - headerHeight - 10;
        console.log(viewportOffset.top);
        console.log(targetPos);
        scrollToSmoothly(targetPos,300);
      }
    })
  }

  var tabs = document.querySelector('[data-tabs-anchor]');
  console.log(tabs);
  if (tabs) {
    tabs.addEventListener('click',function(event) {
      console.log('1');
      console.log(event.target);
      if (event.target.classList.contains('page-links__link')) {
        console.log(event.target.dataset.anchor);
        var target = document.querySelector(event.target.dataset.anchor);
        console.log(target);
        if (target) {
          var headerHeight = document.querySelector('.page-header').clientHeight;
          var viewportOffset = target.getBoundingClientRect();
          var targetPos = viewportOffset.top + window.scrollY - headerHeight - 10;
          console.log(viewportOffset.top);
          console.log(targetPos);
          scrollToSmoothly(targetPos,300);
        }
      }
    })
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
