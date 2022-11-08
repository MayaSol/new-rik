const ready = require('../../js/utils/documentReady.js');

ready(function(){

  // dropdowns = document.querySelectorAll('.dropdown:not(.disabled):not(:disabled)');


  // [...dropdowns].map(dropdownEl => dropdownEl.addEventListener('mouseenter',function() {
  //   console.log('mouseenter');
  //   event.preventDefault();
  //   console.log(this);
  //   console.log(this.querySelector('[data-bs-toggle="dropdown"]'));
  //   Dropdown.getOrCreateInstance(this.querySelector('[data-bs-toggle="dropdown"]')).show();
  // }));

  // [...dropdowns].map(dropdownEl => dropdownEl.addEventListener('mouseleave',function() {
  //   console.log('mouseleave');
  //   event.preventDefault();
  //   Dropdown.getOrCreateInstance(this).hide();
  // }))

});
