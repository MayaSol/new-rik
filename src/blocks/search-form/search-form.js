const ready = require('../../js/utils/documentReady.js');
const getParents = require('../../js/utils/getParents.js');
const findPos = require('../../js/utils/findPos.js');
var throttle = require('lodash.throttle');

ready(function() {

  const INPUT_SELECTOR = '.search-form__input';
  const searchForm = document.getElementsByClassName('search-form')[0];

  if (searchForm.navMobileOpen) {
    mobileSearchOpen(searchForm);
  }

  //  Открыть поиск
  let btnSearch = document.getElementById('btnSearch');
  btnSearch.addEventListener('click', function(event) {
    let searchForm = getParents(this, '.search-form');
    if (searchForm.length > 0) {
      if (searchForm[0].navMobileOpen) {
        return;
      }
      if (searchForm[0].classList.contains('active')) {
        mobileSearchClose(searchForm[0]);
        searchForm[0].classList.remove('active');
      } else {
        mobileSearchOpen(searchForm[0]);
        searchForm[0].classList.add('active');
        searchForm[0].querySelector(INPUT_SELECTOR).focus();
      }
    }
    event.stopPropagation();
  });

  // Закрыть поиск по клику вне формы
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
      } else if (searchForm.navMobileOpen) {
        return;
      };
    }
    // клик не внутри формы поиска
    closeSearchForms();
  });


  document.addEventListener('keydown', function(event) {
    if (event.code === 'Escape') {
      closeSearchForms();
    }
  })

  function closeSearchForms() {
    let searchForms = document.querySelectorAll('.search-form');
    if (document.documentElement.clientWidth < 1024) {
      for (form of searchForms) {
        mobileSearchClose(form);
      }
    } else {
      for (form of searchForms) {
        form.classList.remove('active');
      }
    }
  }


  var searchForms = document.querySelectorAll('.search-form');

  var screenPrev = document.documentElement.clientWidth;

  function onResize() {
    var screenNext = document.documentElement.clientWidth;
    if (screenPrev != screenNext) {
      for (var form of searchForms) {
        mobileSearchClose(form);
      }
    }
    screenPrev = screenNext;
  }

  window.addEventListener('resize', throttle(onResize, 200));


});

  var mobileSearchOpened = false;


  var mobileSearchOpen = function(searchFormEl) {
    var screenWidth = document.documentElement.clientWidth;
    var widthDelta = 0;
    if (searchFormEl.navMobileOpen) {
      widthDelta = 50;
    }

    if (screenWidth < 1024) {
      var offsetLeft = findPos(searchFormEl)[0];
      var closeBtn = document.getElementsByClassName('off-canvas__toggler')[0];
      var offsetCloseBtn = findPos(closeBtn)[0];
      console.log(screenWidth);
      console.log(offsetCloseBtn);
      var inputWrapper = searchFormEl.querySelector('.search-form__input-wrapper');
      searchFormEl.style.transform = `translateX(${offsetCloseBtn - offsetLeft}px)`;
      inputWrapper.style.width = offsetCloseBtn + 'px';
      inputWrapper.style.maxWidth = offsetCloseBtn + 'px';
      searchFormEl.classList.add('active');
      mobileSearchOpened = true;
    }
  }

  function mobileSearchClose(searchFormEl) {
    searchFormEl.style.transform = 'none';
    var inputWrapper = searchFormEl.querySelector('.search-form__input-wrapper');
    if (mobileSearchOpened) {
      inputWrapper.addEventListener('transitionend', function(event) {
        inputWrapper.style.width = '';
      }, { once: true });
    }
    inputWrapper.style.maxWidth = '';
    searchFormEl.classList.remove('active');
    mobileSearchOpened = false;
  }

exports.mobileSearchOpen = mobileSearchOpen;
exports.mobileSearchClose = mobileSearchClose;
