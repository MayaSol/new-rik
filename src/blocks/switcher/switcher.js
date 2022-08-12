const ready = require('../../js/utils/documentReady.js');
const getParents = require('../../js/utils/getParents.js');

ready(function() {
  /*Выпадашка с   языками*/
  try {
    getAllValues();
    console.log(ALL_VALUES);
    setSwitcherValue('lang');

    var switchers = document.querySelectorAll('.switcher__wrapper');
    for (switcher of switchers) {
      var switcherItems = switcher.querySelectorAll('.switcher__item');
      for (i = 0; i < switcherItems.length; i++) {
        switcherItems[i].addEventListener('click', function(event) {
          event.preventDefault();
          if (this.dataset && this.dataset.name && this.dataset.name != "") {
            changeSwitcherValue('lang', this.dataset.name);
          }
        })
      }
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

/*Выпадашка*/
var ALL_VALUES = {};

function getAllValues() {
  var switcherList = document.querySelectorAll('.switcher__wrapper');
  if (switcherList.length > 0) {
    for (switcher of switcherList) {
      ALL_VALUES[switcher.id] = {};
      var switcherOpts = switcher.querySelectorAll('.switcher__select .switcher__item');
      for (i = 0; i < switcherOpts.length; i++) {
        ALL_VALUES[switcher.id][switcherOpts[i].dataset.name] = switcherOpts[i].innerText;
      }
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
      // console.log(Object.keys(ALL_VALUES));
      // console.log(Object.keys(ALL_VALUES)[0]);
      // console.log(Object.keys(ALL_VALUES[Object.keys(ALL_VALUES)[0]]));
      active = Object.keys(ALL_VALUES[Object.keys(ALL_VALUES)[0]])[0];
      // console.log('setSwitcherValue: ' + active);
      setCookie(cookieName, active);
    }
  }

  for (var i = 0; i < switchers.length; i++) {

    console.log(switchers[i]);
    console.log(switchers[i].id);

    switcherEl = switchers[i].querySelector('.switcher__value');
    console.log(switcherEl);
    console.log(ALL_VALUES[switchers[i].id][active]);
    switcherEl.textContent = ALL_VALUES[switchers[i].id][active];

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
      [...btns].map((btn, i, btns) => {
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
