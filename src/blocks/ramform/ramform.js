const ready = require('../../js/utils/documentReady.js');
import IMask from 'imask';

ready(function() {
  var contactFormsList = document.getElementsByClassName('ramform-content');
  if (contactFormsList.length > 0) {
    for (let contactForm of contactFormsList) {
      console.log(contactForm);
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
          } else {
            let textarea = field.getElementsByTagName('textarea');
            if (textarea.length > 0) {
              textarea[0].placeholder = title;
            }
          }
        }
      }
    }
  }
  //***
  // const maskPhone = {
  //   mask: '+{7} (000) 000 - 00 - 00',
  //   lazy: false
  // };
  // let phoneInputSelectors = [
  //   '.contacts-form .ramform-item-2 input',
  //   '.product-actions .ramform-item-2 input',
  //   '.product-main__special .ramform-item-2 input',
  //   '.consult .ramform-item-2 input'
  // ];
  // let phoneInputs = [];
  // for (let selector of phoneInputSelectors) {
  //   let phoneInput = document.querySelector(selector);
  //   if (phoneInput) {
  //     phoneInputs.push(phoneInput);
  //   }
  // }

  // for (let input of phoneInputs) {
  //   let mask = IMask(input, maskPhone);
  //   mask.on("accept", function() {
  //     checkInput('+7 (___) ___ - __ - __', 'text-black', input, mask);
  //   });
  // }
  //***

});

// function checkInput(maskValue, inputClass, input, mask) {
//   if (mask.value === maskValue) {
//     console.log('1');
//     input.classList.remove(inputClass);
//   } else {
//     console.log('2');
//     console.log(input);
//     input.classList.add(inputClass);
//   }
// }
