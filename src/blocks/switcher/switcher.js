const ready = require('../../js/utils/documentReady.js');
const getParents = require('../../js/utils/getParents.js');

ready(function() {
  /*Выпадашка с   языками*/
  try {
    getAllValues();
    console.log(ALL_VALUES);
    setSwitcherValue('lang');

    var switcherItems = document.querySelectorAll('.switcher__item');
    for (i = 0; i < switcherItems.length; i++) {
      switcherItems[i].addEventListener('click', function(event) {
        event.preventDefault();
        if (this.dataset && this.dataset.name && this.dataset.name != "") {
          changeSwitcherValue('lang', this.dataset.name);
        }
      })
    }

  } catch (e) {
    console.log('Ошибка (выбор города): ' + e.name + ":" + e.message + "\n" + e.stack);
  }

  /*Кнопки выбора языка*/
  try {
    initLangBtns();
  } catch (e) {
    console.log('Ошибка (выбор города): ' + e.name + ":" + e.message + "\n" + e.stack);
  }
});

/*Выпадашка с городами*/
var ALL_VALUES = {};

function getAllValues() {
  var switcherSelect = document.querySelector('.switcher__select');
  if (switcherSelect) {
    var switcherOpts = switcherSelect.querySelectorAll('.switcher__item');
    for (i = 0; i < switcherOpts.length; i++) {
      ALL_VALUES[switcherOpts[i].dataset.name] = switcherOpts[i].innerText;
    }
  }
}

function setSwitcherValue(cookieName) {
  var switchers = document.querySelectorAll('.switcher__wrapper');
  var switcherEl;
  var active;


  if (switchers.length > 0) {
    active = getCookie(cookieName);

    if ((typeof active === 'undefined') || (active == "") || (active == "undefined")) {
      active = Object.keys(ALL_VALUES)[0];
      setCookie(cookieName, active);
    }
  }

  for (var i = 0; i < switchers.length; i++) {

    switcherEl = switchers[i].querySelector('.switcher__value');
    switcherEl.textContent = ALL_VALUES[active];

    var items = switchers[i].querySelectorAll('.switcher__item');
    for (var j = 0; j < items.length; j++) {

      if (items[j].dataset.name === active) {
        if (!items[j].classList.contains('switcher__item--active')) {
          items[j].classList.add('switcher__item--active')
        }
      } else {
        items[j].classList.remove('switcher__item--active');
      }
    }


  }
}

function changeSwitcherValue(cookieName, code) {
  setCookie(cookieName, code);
  setSwitcherValue(cookieName);
}

function initLangBtns() {
  active = getCookie('lang');
  let btnGroups = document.querySelectorAll('.lang-btns');
  if (btnGroups.length > 0) {
    for (let i = 0; i < btnGroups.length; i++) {
      let btns = btnGroups[i].querySelectorAll('.btn--lang');
      if (typeof active !== 'undefined') {
        let activeBtn = btnGroups[i].querySelector('.btn--lang[data-name=' + active + ']');
        activeBtn.classList.add('active');
      }
      [...btns].map((btn,i,btns) => {
        btn.addEventListener('click', function(event) {
          [...btns].map(btn => { btn.classList.remove('active') });
          this.classList.add('active');
          setCookie('lang', this.dataset.name);
          setSwitcherValue('lang');
        })
      })
    }
  }
}


/*Работа с cookies*/
function setCookie(name, value, options) {
  if (typeof options === 'undefined') {
    options = {};
  }

  var options = {
    ...options,
    path: '/',
  };


  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);


  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue + ';';
    }
  }

  document.cookie = updatedCookie;
}


function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  var result;
  if (matches) {
    result = decodeURIComponent(matches[1]);
  }
  return result;
}
