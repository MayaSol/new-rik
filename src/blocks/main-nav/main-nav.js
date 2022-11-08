/* global document Element */

const ready = require('../../js/utils/documentReady.js');
const getParents = require('../../js/utils/getParents.js');

ready(function(){

  // Добавление/удаление модификаторов при фокусировке на ссылочном элементе
  var linkClassName = 'main-nav__link';
  var linkClassNameShowChild = 'main-nav__item--show-child';
  var findLinkClassName = new RegExp(linkClassName);
  // Слежение за всплывшим событием focus (нужно добавить класс, показывающий потомков)
  document.addEventListener('focus', function(event) {
    // console.log('main-nav.js focus');
    // console.log(event.target);
    var parentLink = getParents(event.target,'.main-nav__link');
    // Если событие всплыло от одной из ссылок гл. меню
    if (parentLink.length >0 && findLinkClassName.test(parentLink.className)) {
      // И если это главное меню
      var parentNavMain = getParents(event.target,'.nav--main');
      // console.log(parentNavMain);
      if (parentNavMain.length > 0) {
        // Добавим классы, показывающие списки вложенных уровней, на всех родителей
        var parents = getParents(event.target, '.main-nav__item');
        for (var i = 0; i < parents.length; i++) {
          parents[i].classList.add(linkClassNameShowChild);
        }
      }
    }
    // console.log('----------------------');
  }, true);
  // Слежение за всплывшим событием blur (нужно убрать класс, показывающий потомков)
  document.addEventListener('blur', function(event) {
    // Если событие всплыло от одной из ссылок гл. меню
    var parentLink = getParents(event.target,'.main-nav__link');
    if (findLinkClassName.test(parentLink.className)) {
      // Уберем все классы, показывающие списки 2+ уровней
      var parents = document.querySelectorAll('.'+linkClassNameShowChild)
      for (var i = 0; i < parents.length; i++) {
        parents[i].classList.remove(linkClassNameShowChild);
      }
    }
  }, true);


  var navMobile = document.querySelector('.nav--mobile');

  navMobile.addEventListener('click', function(event) {
    console.log('navMobile click');
    console.log(event.target);
    var parentLink = getParents(event.target,'.main-nav__link');
    // console.log(parentLink);
    if (parentLink.length > 0 && parentLink[0].classList.contains('main-nav__link')) {
      console.log(parentLink);
      console.log(parentLink[0].classList.contains('main-nav__link--lvl-2'));
      if (!parentLink[0].classList.contains('main-nav__link--lvl-2')) {
        var parents = getParents(event.target, '.main-nav__item--has-child');
        // console.log(parents);
        if (parents.length > 0) {
          console.log('parents');
          console.log(parents);
          event.preventDefault();
          // var sublist = parents[0].querySelector('.main-nav__sublist-wrapper');
          parents[0].classList.toggle('main-nav__item--show-child');
        }
      }
    }
  });





});
