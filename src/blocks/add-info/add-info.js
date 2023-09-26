const ready = require('../../js/utils/documentReady.js');
const makeEllipsis = require('../../js/utils/ellipsis.js');


ready(function() {
  console.log('add-info.js');
  makeEllipsis('.add-info__text.ellipsis');
});
