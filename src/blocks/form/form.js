const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');
import IMask from 'imask';

ready(function(){
  console.log('form');
  var maskPhone = {
    mask: '+{7} (000) 000 - 00 - 00',
    lazy: false
  };
  var phoneFields = document.getElementsByClassName('field-text--phone');
  console.log(phoneFields);
  for (let field of phoneFields) {
    let input = field.getElementsByTagName('input')[0];
    let mask = IMask(input, maskPhone);
    mask.on("accept", function() {
      checkInput('+7 (___) ___ - __ - __','!text-black',input,mask);
    });
  }
  // var maskEmail = {
  //   mask: /^\S*@?\S*$/
  // };
  // var emailFields = document.getElementsByClassName('field-text--email');
  // for (let field of emailFields) {
  //   let input = field.getElementsByTagName('input')[0];
  //   let mask = IMask(input, maskEmail);
  // }
  var maskInn = {
    mask: '0000000000'
  };
  var innFields = document.getElementsByClassName('field-text--inn');
  for (let field of innFields) {
    let input = field.getElementsByTagName('input')[0];
    let mask = IMask(input, maskInn);
  }
  var maskKpp = {
    mask: '000000000'
  };
  var kppFields = document.getElementsByClassName('field-text--kpp');
  for (let field of kppFields) {
    let input = field.getElementsByTagName('input')[0];
    let mask = IMask(input, maskKpp);
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
