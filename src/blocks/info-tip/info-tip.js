const ready = require('../../js/utils/documentReady.js');
import tippy from 'tippy.js';

ready(function() {
  var infoTips = document.querySelectorAll('.info-tip');


  for (var info of infoTips) {
    var contentId = info.dataset.content;
    var placement = 'top';
    if (info.classList.contains('info-tip--right')) {
      placement = 'right';
    }
    if (contentId) {
      tippy(info, {
        content: contentId,
        theme: 'info-tip',
        allowHTML: true,
        interactive: true,
        placement: placement,
        maxWidth: 468,
      })
    }
  }
});
