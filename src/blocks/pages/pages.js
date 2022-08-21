const ready = require('../../js/utils/documentReady.js');
var throttle = require('lodash.throttle');

ready(function() {

  var touched = false;

  // var headerH = document.querySelector('.page-header').clientHeight;
  // function elementInView(el){
  //   return document.documentElement.scrollTop < el.offsetTop + el.clientHeight;
  // };

  var pagesEl = document.querySelector('.pages');
  var header = document.querySelector('.page-header');
  var headerH = header.clientHeight;
  var pointsArr = [];
  var points = {};
  var prevClosest = 0;
  var firstSection = document.querySelector('section:first-of-type');
  var firstSectionH = firstSection.clientHeight;

  initPagesBar();

  if (pagesEl.clientHeight > 0) {
    window.addEventListener('scroll', throttle(processPagesBar, 100));
    window.addEventListener('resize', throttle(initPagesBar, 100));
  }

  pagesEl.addEventListener('click', function(event) {
    event.preventDefault();
      let pageId = event.target.getAttribute('href');
      console.log(event.target.getAttribute('href'));
      if (pageId) {
        goTo(pageId);
      }
  })

  function initPagesBar() {
    var sectionsList = document.querySelectorAll('section[data-page]');
    // console.log(sectionsList);
    for (section of sectionsList) {
      points[section.offsetTop - headerH] = section.dataset.page;
    }
    console.log(points);
    // console.log(points);
    pointsArr = Object.keys(points);
    console.log(pointsArr);

    var prevClosest;
    var lines = document.querySelectorAll('.pages__line');
    // console.log(lines);
    lineEls = {};
    for (line of lines) {
      if (!(typeof line.dataset.line === 'undefined')) {
        lineEls[line.dataset.line] = line;
      }
    }
    //
    firstSectionH = firstSection.clientHeight;
    // console.log(lineEls);
    // console.log(Object.keys(lineEls));
    touched = true;
  }


  function processPagesBar(arr) {
    console.log('processPagesBar');
    console.log(document.documentElement.scrollTop);
    if (!touched) {
      initPagesBar();
    }
    var goal = document.documentElement.scrollTop;
    if (goal < firstSectionH) {
      header.classList.add('first-page');
    }
    else {
      header.classList.remove('first-page');
    }
    console.log('document.documentElement.scrollTop (goal): ' + goal);
    var closest = pointsArr.reduce(function(prev, curr) {
      return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
    });
    if (prevClosest != closest) {
      Object.keys(lineEls).map(line => lineEls[line].classList.remove('active'));
      lineEls[points[closest]].classList.add('active');
      prevClosest = closest;
    }
  };

  function goTo(pageId) {
    document.documentElement.scrollTop = 1654;
    console.log('goTo');
    console.log(pageId);
    var pageEl = document.getElementById(pageId.replace('#',''));
    console.log(pageEl);
    console.log('pageEl.offsetTop: ' + pageEl.offsetTop);
    if (pageEl) {
      var position = pageEl.offsetTop;
      console.log('position = ' + position);
      document.documentElement.scrollTop = position;
      console.log('document.documentElement.scrollTop = ' + document.documentElement.scrollTop);
      //pageEl.scrollTop = 0; ???
    }
    console.log('goTo-----------------');
  }

});


