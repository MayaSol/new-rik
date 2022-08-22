const ready = require('../../js/utils/documentReady.js');
const getParents = require('../../js/utils/getParents.js');
const findPos = require('../../js/utils/findPos.js');
var throttle = require('lodash.throttle');

ready(function() {

  const INPUT_SELECTOR = '.search-form__input';

  //  Открыть поиск
  let btnSearch = document.getElementById('btnSearch');
  btnSearch.addEventListener('click', function(event) {
    let searchForm = getParents(this, '.search-form');
    if (searchForm.length > 0) {
      if (searchForm[0].classList.contains('active')) {
        mobileSearchClose(searchForm[0]);
        searchForm[0].classList.remove('active');
      }
      else {
        mobileSearchOpen(searchForm[0]);
        searchForm[0].classList.add('active');
        searchForm[0].querySelector(INPUT_SELECTOR).focus();
      }
    }
    event.stopPropagation();
  });

  // Закрыть поиск по клику вне формы !!! Добавить ESC !!!
  document.addEventListener('click', (event) => {
    if (event.target.classList.contains('search-form')) {
      if (event.target.classList.contains('active')) {
        return;
      }
    } else {
      let parent = getParents(event.target, '.search-form');
      if (parent.length > 0) {
        if (parent[0].classList.contains('active')) {
          return;
        }
      };
    }
    // клик не внутри формы поиска
    closeSearchForms();
  });

  function closeSearchForms() {
    let searchForms = document.querySelectorAll('.search-form');
    if (document.documentElement.clientWidth < 1024) {
      for (form of searchForms) {
        mobileSearchClose(form);
      }
    }
    else {
      for (form of searchForms) {
        form.classList.remove('active');
      }
    }
  }

  var mobileSearchOpened = false;

  function mobileSearchOpen(searchFormEl) {
    var screenWidth = document.documentElement.clientWidth;
    console.log('mobileSearchOpen screenWidth: ' + screenWidth);
    if (screenWidth < 1024) {
      console.log(searchFormEl.offsetLeft);
      console.log(screenWidth - searchFormEl.offsetLeft);
      var offsetLeft = findPos(searchFormEl)[0];
      var inputWrapper = searchFormEl.querySelector('.search-form__input-wrapper');
      console.log(`translateX(${screenWidth - searchFormEl.offsetLeft})px`);
      searchFormEl.style.transform = `translateX(${screenWidth - offsetLeft}px)`;
      inputWrapper.style.width = screenWidth + 'px';
      inputWrapper.style.maxWidth = screenWidth + 'px';
      searchFormEl.classList.add('active');
      mobileSearchOpened = true;
    }
  }

  function mobileSearchClose(searchFormEl) {
      searchFormEl.style.transform = 'none';
      var inputWrapper = searchFormEl.querySelector('.search-form__input-wrapper');
      if (mobileSearchOpened) {
        inputWrapper.addEventListener('transitionend',function(event) {
          console.log('inputWrapper transitionend');
          inputWrapper.style.width = '';
        }, {once: true});
      }
      inputWrapper.style.maxWidth = '';
      searchFormEl.classList.remove('active');
      mobileSearchOpened = false;
  }


  var searchForms = document.querySelectorAll('.search-form');

  function onResize() {
    for (var form of searchForms) {
      mobileSearchClose(form);
    }
  }

  window.addEventListener('resize', throttle(onResize, 200));

  document.addEventListener('keydown', function(event) {
    console.log(event.code);
    if (event.code === 'Escape') {
      closeSearchForms();
    }
  })

  // window.addEventListener('resize', function() {
  //   console.log('window resize');
  //   var searchForms = document.querySelectorAll('.search-form');
  //   console.log(searchForms);
  //   for (var form of searchForms) {
  //     mobileSearchClose(form);
  //   }
  // })

  // let btnSearch = document.getElementById('btnSearch');
  // console.log(btnSearch);
  // btnSearch.addEventListener('click', function(event) {
  //   let searchForm = getParents(this, '.search-form');
  //   console.log(searchForm);
  //   if (!searchForm[0].classList.add('active')) {
  //     searchForm[0].classList.add('active');
  //     searchForm[0].querySelector('input').classList.add('active');
  //     event.stopPropagation();
  //   }
  // });



  // document.addEventListener('click', (event) => {
  //   console.log('document click');
  //   if (event.target.classList.contains('search-form')) {
  //     if (event.target.classList.contains('active')) {
  //       console.log('click on active form');
  //       let searchFormInput = document.querySelector('.search-form input');
  //       searchFormInput.classList.remove('active');
  //       // event.target.classList.remove('active');
  //     }
  //   } else {
  //     let parent = getParents(event.target, '.search-form');
  //     console.log(parent);
  //     console.log(parent.length);
  //     if (parent.length > 0) {
  //       if (parent[0].classList.contains('active')) {
  //         console.log('return');
  //         return;
  //       }
  //     };
  //   }
  //   let searchFormInput = document.querySelector('.search-form input');
  //   searchFormInput.classList.remove('active');

  //   console.log('end');

  // });

  // let searchFormInput = document.querySelector('.search-form input');
  // searchFormInput.addEventListener('transitionend', function(event) {
  //   console.log('transitionend');
  //   console.log(this);
  //   if (!this.classList.contains('active')) {
  //     getParents(this, '.search-form')[0].classList.remove('active');
  //   }
  // });
  // searchFormInput.addEventListener('transitionstart', function(event) {
  //   console.log('transitionstart');
  //   console.log(this);
  //   if (!this.classList.contains('active')) {
  //     getParents(this, '.search-form')[0].querySelector('.search-form__btn').classList.remove('active');
  //   } else {
  //     getParents(this, '.search-form')[0].querySelector('.search-form__btn').classList.add('active');
  //   }
  // })


});
