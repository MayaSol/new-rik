const ready = require('./utils/documentReady.js');

ready(function() {
  console.log('test');
  let all = document.querySelectorAll('body *');
  console.log(all);
  for (let el of all) {
    el.addEventListener('focus',function(e) {
      console.log(e.target);
    })
  }
});
