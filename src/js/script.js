const ready = require('./utils/documentReady.js');
const makeEllipsis = require('./utils/ellipsis.js');
const throttle = require('lodash.throttle');


ready(function() {

  // const makeEllipsis = function(selector) {
  //   var ellipsisEls = document.querySelectorAll(selector);

  //   for (el of ellipsisEls) {
  //     var lines = el.dataset.lines;
  //     if (lines) {
  //       truncateElement(el, lines);
  //     }
  //     else {
  //       console.log('truncate by height');
  //       console.log(el);
  //       var lineHeight = getLineHeight(el);
  //       console.log('lineHeight: ' + lineHeight);
  //       var elHeight = el.clientHeight;
  //       console.log('elHeight: ' + elHeight);
  //       console.log('scrollHeight: ' + el.scrollHeight);
  //       console.log(elHeight / lineHeight);
  //       lines = parseInt(elHeight / lineHeight);
  //       console.log(lines);
  //       lines = (lines > 1) ? lines -1 : lines;
  //       truncateElement(el, lines);
  //       console.log('truncate by height --------------------------');
  //     }
  //   }
  // }

  makeEllipsis('.ellipsis');



  function addtouchclass() { // first time user touches the screen
    console.log('touch start');
      document.documentElement.classList.remove('no-touch');
      document.documentElement.classList.add('touch'); // add "can-touch" class to document root using classList API
      document.removeEventListener('touchstart', addtouchclass, false) // de-register touchstart event
  }

  document.addEventListener('touchstart', addtouchclass, false);

  detectChangeHeight();
  window.onresize = throttle(detectChangeHeight,500);

});


var getLineHeight = function getLineHeight(element) {
  var lineHeight = window.getComputedStyle(element)['line-height'];
  if (lineHeight === 'normal') {
    // sucky chrome
    return 1.16 * parseFloat(window.getComputedStyle(truncateElement)['font-size']);
  } else {
    return parseFloat(lineHeight);
  }
};

var detectChangeHeight = function() {
  if (document.documentElement.clientHeight < 750) {
    document.documentElement.classList.add('screen-low');
  }
  else {
    document.documentElement.classList.remove('screen-low');
  }
}

var truncateElement = function(element, lines) {
  // console.log('truncateElement');
  // console.log(element);
  var truncateText = element.innerHTML;
  var truncateTextParts = truncateText.split(' ');
  var lineHeight = getLineHeight(element);
  var maxHeight = lines * lineHeight;

  console.log('lineHeight = ' + lineHeight);
  console.log('lines = ' + lines);
  console.log('maxHeight = ' + maxHeight);
  console.log('element.clientHeight =' + element.clientHeight);

  // let div = document.createElement('div');
  // div.className = 'test';
  // div.innerHTML = truncateText;
  // let parent = document.querySelector('.test-wrapper');
  // parent.append(div);

  // var initial = element;
  // var element = div;
  // let test = document.querySelector('.test');

  //!!! while (element.clientHeight > maxHeight && truncateTextParts.length > 0) {
  while (element.clientHeight > maxHeight && truncateTextParts.length > 0) {
    truncateTextParts.pop();
    element.innerHTML = truncateTextParts.join(' ') + '...';
    // initial.innerHTML = div.innerHTML;
    console.log(truncateTextParts.length, maxHeight, element.clientHeight);
    console.log(element.innerHTML);
    //   console.log('element.clientHeight = ' + element.clientHeight);
    // console.log('maxHeight = ' + maxHeight);
    //   console.log(element.clientHeight > maxHeight && truncateTextParts.length > 0);
  }
}

// const $ = require('jquery');
// $( document ).ready(function() {});
