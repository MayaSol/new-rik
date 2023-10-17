  const makeEllipsis = function(selector) {
    console.log('makeEllipsis');
    console.log(selector);
    var ellipsisEls;
    if (typeof selector == 'string') {
      ellipsisEls = document.querySelectorAll(selector);
    }
    else if (typeof selector == 'object') {
      ellipsisEls = [selector];
    }
    console.log('ellipsisEls');
    console.log(ellipsisEls);
    if (!ellipsisEls) {
      return;
    }
    // console.log(ellipsisEls);
    for (var el of ellipsisEls) {
      var lines = getLines(el);
      // if (document.documentElement.clientWidth >= 1024 && el.dataset.lgLines) {
      //   lines=el.dataset.lgLines;
      // }
      // else {
      //   lines = el.dataset.lines;
      //   if (!lines) {
      //     var lineHeight = getLineHeight(el);
      //     var elHeight = el.clientHeight;
      //     lines = parseInt(elHeight / lineHeight);
      //   }
      // }
      console.log(lines);
      if (lines) {
        truncateElement(el, lines);
      }
    }
  }

var getLines = function(el) {
  if (document.documentElement.clientWidth >= 1024 && el.dataset.lgLines) {
    lines=el.dataset.lgLines;
  }
  else {
    lines = el.dataset.lines;
    if (!lines) {
      var lineHeight = getLineHeight(el);
      var elHeight = el.clientHeight;
      lines = parseInt(elHeight / lineHeight);
    }
  }
  return lines;
}

var getLineHeight = function getLineHeight(element) {
  var lineHeight = window.getComputedStyle(element)['line-height'];
  if (lineHeight === 'normal') {
    // sucky chrome
    return 1.16 * parseFloat(window.getComputedStyle(truncateElement)['font-size']);
  } else {
    return parseFloat(lineHeight);
  }
};

var getContentHeight = function getContentHeight(element) {
  return element.clientHeight - parseFloat(window.getComputedStyle(element)['padding-top']) - parseFloat(window.getComputedStyle(element)['padding-bottom']);
};

var truncateElement = function(element, lines) {
  // console.log('truncateElement');
  // console.log(element);
  // console.log(lines);
  var truncateText = element.innerHTML;
  var truncateTextParts = truncateText.split(' ');
  var lineHeight = getLineHeight(element);
  var maxHeight = lines * lineHeight;

  // console.log('lineHeight = ' + lineHeight);
  // console.log('lines = ' + lines);
  // console.log('maxHeight = ' + maxHeight);
  // console.log('element.clientHeight =' + element.clientHeight);


  // console.log('------------while-------------------');
  var contentHeight = getContentHeight(element);
  while (contentHeight > maxHeight && truncateTextParts.length > 0) {
    truncateTextParts.pop();
    element.innerHTML = truncateTextParts.join(' ') + '...';
    contentHeight = getContentHeight(element);
    //   console.log('element.clientHeight = ' + element.clientHeight);
    //   console.log(element.clientHeight > maxHeight && truncateTextParts.length > 0);
    // console.log(element.innerHTML);
  }
    // console.log('---------------------------------------------');

}


module.exports = makeEllipsis;
