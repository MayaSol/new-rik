const ready = require('../../js/utils/documentReady.js');
const getParents = require('../../js/utils/getParents.js');

ready(function() {


  let btnSearch = document.getElementById('btnSearch');
  console.log(btnSearch);
  btnSearch.addEventListener('click', function(event) {
    let searchForm = getParents(this, '.search-form');
    console.log(searchForm);
    if (!searchForm[0].classList.add('active')) {
      searchForm[0].classList.add('active');
      searchForm[0].querySelector('input').classList.add('active');
      event.stopPropagation();
    }
  });



  document.addEventListener('click', (event) => {
    console.log('document click');
    if (event.target.classList.contains('search-form')) {
      if (event.target.classList.contains('active')) {
        console.log('click on active form');
        let searchFormInput = document.querySelector('.search-form input');
        searchFormInput.classList.remove('active');
        // event.target.classList.remove('active');
      }
    } else {
      let parent = getParents(event.target, '.search-form');
      console.log(parent);
      console.log(parent.length);
      if (parent.length > 0) {
        if (parent[0].classList.contains('active')) {
          console.log('return');
          return;
        }
      };
    }
    let searchFormInput = document.querySelector('.search-form input');
    searchFormInput.classList.remove('active');

    console.log('end');

  });

  let searchFormInput = document.querySelector('.search-form input');
  searchFormInput.addEventListener('transitionend', function(event) {
    console.log('transitionend');
    console.log(this);
    if (!this.classList.contains('active')) {
      getParents(this, '.search-form')[0].classList.remove('active');
    }
  });
  searchFormInput.addEventListener('transitionstart', function(event) {
    console.log('transitionstart');
    console.log(this);
    if (!this.classList.contains('active')) {
      getParents(this, '.search-form')[0].querySelector('.search-form__btn').classList.remove('active');
    } else {
      getParents(this, '.search-form')[0].querySelector('.search-form__btn').classList.add('active');
    }
  })


});
