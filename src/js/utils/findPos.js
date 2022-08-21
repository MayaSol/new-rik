const findPos = function(element) {
  let curLeft = curTop = 0;
  console.log(element.offsetParent);
  if (element.offsetParent) {
    do {
      console.log(element);
      curLeft += element.offsetLeft;
      curTop += element.offsetTop;
    } while (element = element.offsetParent)
  }
  return [curLeft, curTop];
}


module.exports = findPos;
