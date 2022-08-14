const ready = require('./utils/documentReady.js');

ready(function(){

    var ellipsisEls = document.querySelectorAll('.ellipsis');

    for (el of ellipsisEls) {
        var lines = el.dataset.lines;
        if (lines) {
            truncateElement(el, lines);
        }
    }

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

var truncateElement = function(element, lines) {
  // console.log('truncateElement');
  // console.log(element);
  var truncateText = element.innerHTML;
  var truncateTextParts = truncateText.split(' ');
  var lineHeight = getLineHeight(element);
  var maxHeight = lines * lineHeight;

  // console.log('lineHeight = ' + lineHeight);
  // console.log('lines = ' + lines);
  // console.log('maxHeight = ' + maxHeight);

  while (element.clientHeight > maxHeight && truncateTextParts.length > 0) {
    // console.log(truncateTextParts.length, maxHeight, element.clientHeight);
    truncateTextParts.pop();
    element.innerHTML = truncateTextParts.join(' ') + '...';
  //   console.log('element.clientHeight = ' + element.clientHeight);
  // console.log('maxHeight = ' + maxHeight);
  //   console.log(element.clientHeight > maxHeight && truncateTextParts.length > 0);
  }
}

// const $ = require('jquery');
// $( document ).ready(function() {});
