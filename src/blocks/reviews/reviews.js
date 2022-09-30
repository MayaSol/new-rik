import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const ready = require('../../js/utils/documentReady.js');
// const Choices = require('choices.js');
const Tab = require("../../../node_modules/bootstrap/js/dist/tab.js");
// var throttle = require('lodash.throttle');


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
        console.log(sliderEl);
        var slider = tns({
          container: tabIdSelector  + ' .reviews__slider',
          items: 1,
          slideBy: 1,
          mouseDrag: true,
          controls: true,
          // controls: false,
          nav: false,
          loop: false
        });
        tabSliders[tabIdSelector] = slider;
      }
    }
  }

});
