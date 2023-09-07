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
    var theme = (info.dataset && info.dataset.theme) ? info.dataset.theme : 'info-tip';
    var offset;
    if (theme == 'link-tip') {
      offset = [70, 0];
    }
    if (contentId) {
      tippy(info, {
        content: contentId,
        theme: theme,
        allowHTML: true,
        interactive: true,
        placement: placement,
        maxWidth: 468,
        // delay: [null, 10000],
        // trigger: 'click',
        offset: offset,
      })
    }
  }
});
