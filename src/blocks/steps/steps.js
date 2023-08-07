const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');
const Tab = require("../../../node_modules/bootstrap/js/dist/tab.js");
const env = require("../../../env.js");


ready(function() {
  console.log('env: ');
  console.log(env);
  var stepsNav = document.querySelector('.nav-steps');
  if (stepsNav) {
    var sectionTitle = document.querySelector('.section__title');
    var activeLink = stepsNav.querySelector('.steps__nav-link.active');
    setStepTitle(activeLink);
    var stepNavButtons = stepsNav.querySelectorAll('.steps__nav-link');
    for (stepBtn of stepNavButtons) {
      stepBtn.addEventListener('shown.bs.tab', function(event) {
        setStepTitle(event.target);
      })
    }

    function setStepTitle(activeLink) {
      if (!activeLink) {
        return;
      }
      var activeText = activeLink.querySelector('span:nth-child(2)');
      if (activeText) {
        sectionTitle.innerText = activeText.innerText;
      }
    }

    //Кнопка Дальше
    var nextBtns = document.querySelectorAll('.steps__next-btn');
    for (let btn of nextBtns) {
      btn.addEventListener('click', function(event) {
        event.preventDefault();
        let currentTab = closest(btn, '.tabs__pane');
        if (currentTab) {
          let currentTabId = currentTab.id;
          let currentBtn = currentTabId && stepsNav.querySelector('.steps__nav-link[data-bs-target="#' + currentTabId + '"]');
          console.log(currentBtn);
          let nextBtn = currentBtn.nextSibling;
          // let nextTab = currentTab.nextSibling;
          // if (nextTab) {
          //   nextTab.removeAttribute('disabled');
          // }
          if (nextBtn) {
            nextBtn.classList.remove('disabled');
            var tab = new Tab(nextBtn);
            console.log(tab);
            tab.show();
          }
        }
      })
    }

    function goNext(currentBtn) {
      prevStepBtn();
    }
  }

  //Доставка
  var delivery = document.getElementById('bx-soa-delivery');
  if (delivery) {
    delivery.addEventListener('click', function(event) {
      console.log('delivery click');
      checkOption(event);
    })
    //!!! УБРАТЬ
    // if (env.mode == 'development') {
    //   var deliveryCheckboxList = delivery.querySelectorAll('.bx-soa-pp-company-graf-container');
    //   var deliveryInputs = delivery.querySelectorAll('input');
    //   for (let container of deliveryCheckboxList) {
    //     container.addEventListener('click', function(event) {
    //       console.log('checkbox container click');
    //       console.log(event.target);
    //       checkOptionTest(event, this, deliveryInputs);
    //     })
    //   }
    // }

    var deliveryData = document.querySelector('.delivery-data');
    var pickupData = document.querySelector('.pickup-data');

    var courier = document.getElementById('ID_DELIVERY_ID_27');
    var pickup = document.getElementById('ID_DELIVERY_ID_4');
    if (courier.checked) {
      deliveryData.classList.add('show');
    }
    if (pickup.checked) {
      pickupData.classList.add('show');
    }

    delivery.addEventListener('click',function(event) {
      console.log(event.target);
      var container = closest(event.target,'.bx-soa-pp-company-graf-container');
      console.log(container);
      var input = container.querySelector('input');
      console.log(input);
      deliveryData.classList.remove('show');
      pickupData.classList.remove('show');
      if (input && input.id == 'ID_DELIVERY_ID_27') {
        deliveryData.classList.add('show');
      }
      else if (input && input.id =='ID_DELIVERY_ID_4') {
        pickupData.classList.add('show');
      }
    })
    //!!!
  }

  function checkOption(event) {
    console.log('checkOption');
    console.log(event);
    console.log(event.target);
    console.log(closest(event.target, '.bx-soa-pp-company-graf-container', true))
  }

  //Доставка
  // var paysystem = document.getElementById('bx-soa-paysystem');
  // if (paysystem) {
  //   paysystem.addEventListener('change', function(event) {
  //     console.log('paysystem onchange');
  //     console.log(event);
  //     console.log(event.target);
  //   })

    //!!! УБРАТЬ
    // if (env.mode == 'development') {
    //   var paysystemCheckboxList = paysystem.querySelectorAll('.bx-soa-pp-company-graf-container');
    //   var paysystemInputs = paysystem.querySelectorAll('input');
    //   for (let container of paysystemCheckboxList) {
    //     container.addEventListener('click', function(event) {
    //       console.log('checkbox container click');
    //       console.log(event.target);
    //       checkOptionTest(event, this, paysystemInputs);
    //     })
    //   }
    // }
    //!!!
  // }

  //!!! УБРАТЬ
  //  Отметить чекбокс
  // if (env.mode == 'development') {
  //   function checkOptionTest(event, _this, allInputs) {
  //     var thisInput = _this.querySelector('input');
  //     var thisInputChecked = thisInput.checked;
  //     if (!thisInputChecked) {
  //       for (let input of allInputs) {
  //         input.removeAttribute('checked');
  //       }
  //       thisInput.setAttribute('checked', true);
  //     }
  //   }
  //   ymaps.ready(function() {
  //     var myMap = new ymaps.Map('pickup-map', {
  //         center: [55.751574, 37.573856],
  //         zoom: 9
  //       }, {
  //         searchControlProvider: 'yandex#search'
  //       }),

  //       // Создаём макет содержимого.
  //       MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
  //         '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
  //       ),

  //       myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
  //         hintContent: '',
  //         balloonContent: ''
  //       }, {
  //         // Опции.
  //         // Необходимо указать данный тип макета.
  //         iconLayout: 'default#image',
  //         // Своё изображение иконки метки.
  //         iconImageHref: 'images/pin.png',
  //         // Размеры метки.
  //         iconImageSize: [30, 43],
  //         // Смещение левого верхнего угла иконки относительно
  //         // её "ножки" (точки привязки).
  //         iconImageOffset: [-5, -38]
  //       }),

  //       myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
  //         hintContent: '',
  //       }, {
  //         // Опции.
  //         // Необходимо указать данный тип макета.
  //         iconLayout: 'default#imageWithContent',
  //         // Своё изображение иконки метки.
  //         iconImageHref: 'images/pin.png',
  //         // Размеры метки.
  //         iconImageSize: [30, 43],
  //         // Смещение левого верхнего угла иконки относительно
  //         // её "ножки" (точки привязки).
  //         iconImageOffset: [-5, -38],
  //         // Смещение слоя с содержимым относительно слоя с картинкой.
  //         // iconContentOffset: [15, 15],
  //         // Макет содержимого.
  //         // iconContentLayout: MyIconContentLayout
  //       });

  //     myMap.geoObjects
  //       .add(myPlacemark)
  //       .add(myPlacemarkWithContent);
  //   });




  // }
    //!!!


});
