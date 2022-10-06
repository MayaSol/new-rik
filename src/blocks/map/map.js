const ready = require('../../js/utils/documentReady.js');


ready(function() {
  if (document.querySelector('#map')) {
    ymaps.ready(function() {
      var myMap = new ymaps.Map('map', {
          center: [55.768355, 37.717474],
          zoom: 12
        }, {
          searchControlProvider: 'yandex#search'
        }),

        HintLayout = ymaps.templateLayoutFactory.createClass("<div class='my-hint'>" +
          "<span>{{ properties.text }}</span>" +
          "</div>", {
            // Определяем метод getShape, который
            // будет возвращать размеры макета хинта.
            // Это необходимо для того, чтобы хинт автоматически
            // сдвигал позицию при выходе за пределы карты.
            getShape: function() {
              var el = this.getElement(),
                result = null;
              if (el) {
                var firstChild = el.firstChild;
                result = new ymaps.shape.Rectangle(
                  new ymaps.geometry.pixel.Rectangle([
                    [0, 0],
                    [firstChild.offsetWidth, firstChild.offsetHeight]
                  ])
                );
              }
              return result;
            }
          }
        );

      // Creating a content layout.
      MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
          '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
          hintContent: 'ООО РИКТАМЕД',
          // text: "ООО РИКТАМЕД",
        }, {
          /**
           * Options.
           * You must specify this type of layout.
           */
          // hintLayout: HintLayout,
          iconLayout: 'default#image',
          // Custom image for the placemark icon.
          iconImageHref: '/img/mapImage.svg',
          // The size of the placemark.
          iconImageSize: [56, 68],
          /**
           * The offset of the upper left corner of the icon relative
           * to its "tail" (the anchor point).
           */
          iconImageOffset: [-28, -68]
        }),

        myPlacemarkWithContent = new ymaps.Placemark([55.661574, 37.573856], {
          hintContent: 'A custom placemark icon with contents',
          balloonContent: 'This one — for Christmas',
          iconContent: '12'
        }, {
          /**
           * Options.
           * You must specify this type of layout.
           */
          iconLayout: 'default#imageWithContent',
          // Custom image for the placemark icon.
          iconImageHref: 'images/ball.png',
          // The size of the placemark.
          iconImageSize: [48, 48],
          /**
           * The offset of the upper left corner of the icon relative
           * to its "tail" (the anchor point).
           */
          iconImageOffset: [-24, -24],
          // Offset of the layer with content relative to the layer with the image.
          iconContentOffset: [15, 15],
          // Content layout.
          iconContentLayout: MyIconContentLayout
        });

      myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);
    });
  }



});
