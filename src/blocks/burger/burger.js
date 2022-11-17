/* global document */

const ready = require('../../js/utils/documentReady.js');
const {mobileSearchOpen} = require('../search-form/search-form.js');
const {mobileSearchClose} = require('../search-form/search-form.js');

ready(function(){

  var burgers = document.querySelectorAll('.burger');

  for (var i = 0; i < burgers.length; i++) {
    var burger = burgers[i];
    burger.addEventListener('click', showBurgerTarget);
  }

  function showBurgerTarget() {
    var targetId = this.getAttribute('data-target-id');
    var targetClassToggle = this.getAttribute('data-target-class-toggle');
    if (targetId && targetClassToggle) {
      if (this.classList.contains('burger--animated')) {
        this.classList.toggle('burger--close');
      }
      document.getElementById(targetId).classList.toggle(targetClassToggle);
      document.body.classList.toggle('noscroll');
      // Для формы поиска в открытом мобильном меню
      if (targetId === 'nav-mobile') {
        var searchForm = document.getElementsByClassName('search-form')[0];
        if (searchForm) {
          if (typeof searchForm.navMobileOpen === 'undefined') {
            searchForm.navMobileOpen = false;
          }
          searchForm.navMobileOpen = !searchForm.navMobileOpen;
          if (searchForm.navMobileOpen) {
            mobileSearchOpen(searchForm);
          }
          else {
            mobileSearchClose(searchForm);
          }
        }
      }
    }
  }

});
