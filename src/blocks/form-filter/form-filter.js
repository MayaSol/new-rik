const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');

ready(function() {

  const filterCheckboxes = document.querySelectorAll('.form-filter input[type="checkbox"]');

  for (input of filterCheckboxes) {
    checkboxOnChange(input);
    input.addEventListener('change',function(event) {
      checkboxOnChange(this);
    });
  }

  const filterInputsAll = document.querySelectorAll('.form-filter input');

  for (input of filterInputsAll) {
    let parent = input.closest('.form-filter__item-content');

    var inputOnChange = function() {
      console.log('inputOnChange');

      if (checkboxGroup(parent)) {
        parent.dataset.active = 'true';
      }
      else {
        parent.removeAttribute('data-active');
      }
      // if (Boolean(parent.dataset.active)) {
      //   filterBtn.classList.add('catalog__filter--active');
      // }
      // console.log(parent);
      // console.log(parent.dataset.active);
      // console.log(filterBtn.classList.contains('.catalog__filter--active'));
    }

    input.addEventListener('change',inputOnChange);
  }




});


function checkboxGroup(groupEl) {
  console.log('checkbosGroup');
  console.log(groupEl);
  var inputs = groupEl.querySelectorAll('input[type="checkbox"');
  var filterActive = [...inputs].reduce((prev,cur,i,inputs) => {
    console.log(inputs[i].dataset.active);
    return prev || (inputs[i].dataset.active ? inputs[i].dataset.active : false);
  },false);
  console.log('checkbosGroup result: ' + filterActive);
  return filterActive;
}



function checkboxOnChange(checkbox) {
  if (checkbox.checked) {
    checkbox.dataset.active = true;
  }
  else {
    checkbox.removeAttribute('data-active');
  }
}
