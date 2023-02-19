/*const ready = require('../../js/utils/documentReady.js');
import IMask from 'imask';

ready(function() {
  console.log('contacts-form');
  var contactForm = document.getElementsByClassName('ramform-content');
  if (contactForm.length > 0) {
    contactForm = contactForm[0];
    // var fieldName = contactForm.getElementsByClassName('ramform-item-1')[0];
    // fieldName.getElementsByTagName('input')[0].placeholder = 'Имя';
    var fields = contactForm.getElementsByClassName('ramform-item');
    for (var field of fields) {
      console.log(field);
      console.log(field.getElementsByClassName('ramform-item__title'));
      let title = field.getElementsByClassName('ramform-item__title');
      if (title.length > 0) {
        title = title[0].textContent;
        let input = field.getElementsByTagName('input');
        if (input.length > 0) {
          input[0].placeholder = title;
        }
        else {
          let textarea = field.getElementsByTagName('textarea');
          if (textarea.length > 0) {
            textarea[0].placeholder = title;
          }
        }
      }
    }
    //
    const maskPhone = {
      mask: '+{7} (000) 000 - 00 - 00',
      lazy: false
    };
    let phoneInput = contactForm.getElementsByClassName('ramform-item-2')[0].getElementsByTagName('input')[0];
    let mask = IMask(phoneInput, maskPhone);
    mask.on("accept", function() {
      checkInput('+7 (___) ___ - __ - __','text-black',phoneInput,mask);
    });
  }
});

function checkInput(maskValue,inputClass,input,mask) {
  if (mask.value === maskValue) {
    console.log('1');
    input.classList.remove(inputClass);
  }
  else {
    console.log('2');
    console.log(input);
    input.classList.add(inputClass);
  }
}
*/
