const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');

ready(function() {
  var clearBtn = document.getElementsByClassName('profile__form-clear')[0];

  if (clearBtn) {
    clearBtn.addEventListener('click',function(event) {
      event.preventDefault();
      var form = this.closest('.profile__form');
      if (form) {
        var fields = form.getElementsByClassName('field-text');
        for (var field of fields) {
          let input = field.getElementsByTagName('input')[0];
          input.value = '';
          input.dispatchEvent(new Event('blur'));
        }
      }
    })
  }
});
