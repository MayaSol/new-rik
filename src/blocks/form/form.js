const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');
import IMask from 'imask';

ready(function(){
  console.log('form');
  //!!!!
  // var maskPhone = {
  //   mask: '+{7} (000) 000 - 00 - 00',
  //   lazy: false
  // };
  // var phoneFields1 = Array.from(document.getElementsByClassName('field-text--phone input'));
  // console.log(document.getElementsByClassName('field-text--phone'));
  // console.log(phoneFields1);
  // var phoneFields2 = Array.from(document.querySelectorAll('.field-text__input[name=phone]'));
  // console.log(phoneFields2);
  // var phoneFields3 = Array.from(document.querySelectorAll('.field-text__input[name*=PHONE]'));
  // console.log(phoneFields3);
  // var phoneFields = phoneFields1.concat(phoneFields2).concat(phoneFields3);
  // console.log(phoneFields);
  // for (let input of phoneFields) {
  //   console.log(input);
  //   // let input = field.getElementsByTagName('input')[0];
  //   let mask = IMask(input, maskPhone);
  //   mask.on("accept", function() {
  //     checkInput('+7 (___) ___ - __ - __','!text-black',input,mask);
  //   });
  // }
  //!!!!
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
