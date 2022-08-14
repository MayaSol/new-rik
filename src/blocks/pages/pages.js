const ready = require('../../js/utils/documentReady.js');
var throttle = require('lodash.throttle');

ready(function() {

  var touched = false;

  // var headerH = document.querySelector('.page-header').clientHeight;
  // function elementInView(el){
  //   return document.documentElement.scrollTop < el.offsetTop + el.clientHeight;
  // };

  var pagesEl = document.querySelector('.pages');
  var headerH = document.querySelector('.page-header').clientHeight;
  console.log('pages.height: ' + pagesEl.clientHeight);
  var pointsArr = [];
  var points = {};
  var prevClosest = 0;

  if (pagesEl.clientHeight > 0) {
    window.addEventListener('scroll', throttle(processPagesBar, 100));
  }

  function initPagesBar() {
    var sectionsList = document.querySelectorAll('section[data-page]');
    console.log(sectionsList);
    for (section of sectionsList) {
      points[section.offsetTop - headerH] = section.dataset.page;
    }
    console.log(points);
    pointsArr = Object.keys(points);
    console.log(pointsArr);

    var prevClosest;
    var lines = document.querySelectorAll('.pages__line');
    console.log(lines);
    lineEls = {};
    for (line of lines) {
      console.log()
      if (!(typeof line.dataset.line === 'undefined')) {
        lineEls[line.dataset.line] = line;
      }
    }
    console.log('lineEls: ');
    console.log(lineEls);
    console.log(Object.keys(lineEls));
    touched = true;
  }


  function processPagesBar(arr) {
    if (!touched) {
      initPagesBar();
    }
    var goal = document.documentElement.scrollTop;
    console.log('document.documentElement.scrollTop: ' + goal);
    var closest = pointsArr.reduce(function(prev, curr) {
      return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
    });
    console.log('closest: ' + closest + ' = ' + points[closest]);
    if (prevClosest != closest) {
      Object.keys(lineEls).map(line => lineEls[line].classList.remove('active'));
      lineEls[points[closest]].classList.add('active');
      prevClosest = closest;
    }

  };
});
