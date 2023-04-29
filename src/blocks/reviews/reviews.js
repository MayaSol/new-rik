import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const ready = require('../../js/utils/documentReady.js');
// const Choices = require('choices.js');
const Tab = require("../../../node_modules/bootstrap/js/dist/tab.js");
// var throttle = require('lodash.throttle');
const makeEllipsis = require('../../js/utils/ellipsis.js');


ready(function() {

  var tabSliders = {};
  const tabsSelect = document.getElementById('reviews-tab-select');
  if (tabsSelect) {
    initSelectTabsTrigger();
    initTabSlider(tabsSelect.value);
  }

  var tabsList = document.getElementById('reviewsTab');
  if (tabsList) {
    var tabsItemActive = tabsList.querySelector('.nav-link.active');
    initTabSlider(tabsItemActive.dataset.bsTarget);

    tabsList.addEventListener('click', function(event) {
      if (event.target.classList.contains('nav-link')) {
        initTabSlider(event.target.dataset.bsTarget);
      }
    })
  }
  // window.addEventListener('resize', throttle(initSelectTabsTrigger, 100));

  function initSelectTabsTrigger() {
    if (document.documentElement.clientWidth < 767) {
      showActiveTab();
      tabsSelect.addEventListener('change', function(event) {
        showActiveTab();
      });
    }
  }

  function showActiveTab() {
        var trigger = document.querySelector('[data-bs-target="' + tabsSelect.value + '"]');
        var tab = new Tab(trigger);
        initTabSlider(tabsSelect.value);
        tab.show();
  }

  function initTabSlider(tabIdSelector) {

    if (typeof tabSliders[tabIdSelector] === 'undefined') {
      var sliderEl= document.querySelector(tabIdSelector + ' .reviews__slider');
      if (sliderEl) {
        var slider = tns({
          container: tabIdSelector  + ' .reviews__slider',
          items: 1,
          slideBy: 1,
          mouseDrag: true,
          controls: true,
          // controls: false,
          nav: false,
          loop: false,
          onInit: function(info) {
            var ellipsis = document.querySelector(tabIdSelector + ' .reviews__item-text.ellipsis');
            var timerId;
            function setEllipsis() {
              if (!ellipsis.clientHeight > 0) {
                timerId = setTimeout(setEllipsis, 300);
              }
              else {
                makeEllipsis(tabIdSelector + ' .ellipsis');
              }
            }
            timerId = setTimeout(() => {setEllipsis()}, 300);
            var timerId2 = setTimeout(() => {clearTimeout(timerId)},5000);
          }
        });
        tabSliders[tabIdSelector] = slider;
      }
    }
  }

});
