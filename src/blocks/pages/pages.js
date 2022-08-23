const ready = require('../../js/utils/documentReady.js');
var throttle = require('lodash.throttle');
var scroll = require('scroll');
var page = require('scroll-doc')();
var ease = require('ease-component');


ready(function() {

  var touched = false;
  var userScroll = false;

  // var headerH = document.querySelector('.page-header').clientHeight;
  // function elementInView(el){
  //   return document.documentElement.scrollTop < el.offsetTop + el.clientHeight;
  // };

  var pagesEl = document.querySelector('.pages');

  if (document.documentElement.clientWidth >= 1024) {
    var header = document.querySelector('.page-header');
    var headerH = header.clientHeight;
    var pointsArr = [];
    var points = {};
    var prevClosest = 0;
    var firstSection = document.querySelector('section:first-of-type');
    var firstSectionH = firstSection.clientHeight;
    var lines = document.querySelectorAll('.pages__line');

    initPagesBar();

    pagesEl.addEventListener('click', function(event) {
      event.preventDefault();
      let pageId = event.target.getAttribute('href');
      console.log(event.target.getAttribute('href'));
      if (pageId) {
        goTo(pageId);
      }
    })

    const onScroll = function() {
      console.log('1: ' + userScroll);
      var direction = detectScroll(event);
      scrollToNearest(direction, page.scrollTop);
      // console.log(`${(direction === 0) ? 'TOP' : 'BOTTOM'}`);
      processPagesBar();
      userScroll = true;
    }

    window.addEventListener('scroll', throttle(onScroll, 100));
    window.addEventListener('resize', throttle(initPagesBar, 100));
  }


  var prevPosition = 0;
  // return 0 - top, 1 - bottom
  function detectScroll() {
    // console.log('prev: ' + prevPosition + ', cur: ' + page.scrollTop);
    var direction;
    if (page.scrollTop > prevPosition) {
      direction = 'BOTTOM';
    } else if (page.scrollTop < prevPosition) {
      direction = 'TOP';
    };
    prevPosition = page.scrollTop;
    return direction;
  }

  function scrollToNearest(direction, position) {
    var closestBottom;
    console.log(userScroll);
    if (direction === 'BOTTOM' && userScroll) {
      var position = page.scrollTop;
      var nearest;
      pointsArr.reduce(function(prev, curr) {
        console.log(`curr: ${curr}, prev: ${prev}, position: ${position}, curr-position: ${curr - position}, , prev-position: ${prev - position}`);
        if (curr - position > 0 && prev - position < 0) {
          console.log(curr);
          nearest = curr;
        }
        return curr;
      });
      console.log('nearest: ' + points[nearest]);
      if (nearest && points[nearest]) {
        goTo(points[nearest]);
      }
    }
  }


  function initPagesBar() {
    console.log('initPagesBar');
    var sectionsList = document.querySelectorAll('section[data-page]');
    // console.log(sectionsList);
    for (section of sectionsList) {
      var point = section.offsetTop - headerH;
      point = (point < 0) ? 0 : point;
      points[point] = section.dataset.page;
    }
    console.log(points);
    // console.log(points);
    pointsArr = Object.keys(points);
    console.log(pointsArr);

    var prevClosest;
    // console.log(lines);
    lineEls = {};
    for (line of lines) {
      if (!(typeof line.dataset.line === 'undefined')) {
        lineEls[line.dataset.line] = line;
      }
    }
    console.log(lineEls);
    //
    firstSectionH = firstSection.clientHeight;
    // console.log(lineEls);
    // console.log(Object.keys(lineEls));
    touched = true;
  }

  function processPagesBar() {
    console.log('processPagesBar');
    console.log(document.documentElement.scrollTop);
    if (!touched) {
      initPagesBar();
    }
    var goal = document.documentElement.scrollTop;
    if (goal < firstSectionH) {
      header.classList.add('first-page');
    } else {
      header.classList.remove('first-page');
    }
    // console.log('document.documentElement.scrollTop (goal): ' + goal);
    var closest = pointsArr.reduce(function(prev, curr) {
      // console.log(`curr: ${curr}, prev: ${prev}, position: ${goal}`);
      return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
    });
    if (prevClosest != closest) {
      Object.keys(lineEls).map(line => lineEls[line].classList.remove('active'));
      lineEls[points[closest]].classList.add('active');
      prevClosest = closest;
    }
  };



  function goTo(pageId) {
    userScroll = false;
    console.log('goTo start');
    document.documentElement.scrollTop = 1654;
    console.log('goTo');
    console.log(pageId);
    var pageEl = document.getElementById(pageId.replace('#', ''));
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
    console.log('goTo end: :' + userScroll);
  }

});
