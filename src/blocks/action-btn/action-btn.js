const ready = require('../../js/utils/documentReady.js');

ready(function() {
  var searches = document.getElementById('btnSearch');
  let searchForm = document.querySelector('.search-form');
  if (searches.length > 0) {
    [...searches].map(search => {
      search.addEventListener('click', (event) => {
        if (searchForm) {
          searchForm.classList.add('show');
        }
      })
    })
  }
});
