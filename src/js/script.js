const ready = require('./utils/documentReady.js');
const makeEllipsis = require('./utils/ellipsis.js');
const throttle = require('lodash.throttle');


ready(function() {


//lazy load js scripts
// document.addEventListener('lazybeforeunveil', function(e){
//   console.log('lazybeforeunveil');
//   console.log(e.target);
//   var scriptId = e.target.dataset && e.target.dataset.scriptId;
//   console.log(scriptId);
//   var scriptEl = scriptId && document.getElementById(scriptId);
//   if (scriptEl) {
//       var src = scriptEl.getAttribute('delay');
//       scriptEl.setAttribute('src',src);
//   }
// });

  // makeEllipsis('.ellipsis');


  var delayedScripts = document.querySelectorAll('script[data-src]');
  for (script of delayedScripts) {
    console.log(script.getAttribute('data-src'));
    script.setAttribute('src',script.getAttribute('data-src'));
  }

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
