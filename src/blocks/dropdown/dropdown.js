const ready = require('../../js/utils/documentReady.js');
const Dropdown = require("../../../node_modules/bootstrap/js/dist/dropdown.js");

ready(function(){

  console.log('dropdown.js local');
  console.log(Dropdown);
  console.log(Dropdown.SELECTOR_DATA_TOGGLE);

  dropdowns = document.querySelectorAll('.dropdown:not(.disabled):not(:disabled)');

  console.log(dropdowns);

  console.log([...dropdowns]);

  [...dropdowns].map(dropdownEl => dropdownEl.addEventListener('mouseenter',function() {
    console.log('mouseenter');
    event.preventDefault();
    console.log(this);
    console.log(this.querySelector('[data-bs-toggle="dropdown"]'));
    Dropdown.getOrCreateInstance(this.querySelector('[data-bs-toggle="dropdown"]')).show();
  }));

  [...dropdowns].map(dropdownEl => dropdownEl.addEventListener('mouseleave',function() {
    console.log('mouseleave');
    event.preventDefault();
    Dropdown.getOrCreateInstance(this).hide();
  }))

});
