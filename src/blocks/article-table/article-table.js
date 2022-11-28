const ready = require('../../js/utils/documentReady.js');

ready(function() {
  var tables = document.getElementsByClassName('article-table');
  if (tables.length > 0) {
    var div = document.createElement('div');
    var style = getComputedStyle(tables[0].getElementsByTagName('td')[0], '::before');
    div.style.width = parseInt(style.width) - parseInt(style.paddingLeft) - parseInt(style.paddingRight) + 'px';
    div.style.textAlign = style.textAlign;
    div.style.fontSize = style.fontSize;
    div.style.fontWeight = style.fontWeight;
    div.style.lineHeight = style.lineHeight;
    div.style.paddingTop = style.paddingTop;
    div.style.paddingBottom = style.paddingBottom;
    document.body.appendChild(div);
    for (let table of tables) {
      var tdList = table.getElementsByTagName('td');
      for (let td of tdList) {
        // console.log(td);
        // console.log(td.dataset);
        // console.log(td.dataset && td.dataset.content);
        if (td.dataset && td.dataset.content) {
          console.log(td.dataset.content);
          div.innerHTML = td.dataset.content;
          console.log(div.clientHeight);
          console.log(td.clientHeight);
          if (td.clientHeight < div.clientHeight) {
            td.style.height = div.clientHeight + 'px';
          }
        }
      }
    }
    div.classList.add('hide-text');
  }
});
