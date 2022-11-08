const ready = require('../../js/utils/documentReady.js');

ready(function() {
  /*Буквы*/
  var letterBig = document.querySelector('.article-index__letter-active');

  if (letterBig) {

    document.querySelector('.article-index__alphabet').addEventListener('click', letterClick);

    function letterClick(event) {
      event.preventDefault();
      if (event.target.classList.contains('article-index__letter')) {
        var letters = this.querySelectorAll('.article-index__letter.active');
        for (var i = 0; i < letters.length; i++) {
          letters[i].classList.remove('active');
        }
        event.target.classList.add('active');
        // var letterBig = this.closest('.article-index').querySelector('.article-index__letter-active span');
        letterBig.textContent = event.target.innerHTML;
        filterFirstLetter(letterBig.textContent);
      }
    }

    var tabsElem = document.querySelector('.article-index__tabs');

    if (tabsElem) {
      /*Табы*/
      const TAB_SELECTOR = '.article-index__tab-pane';
      var screenWidth = document.documentElement.clientWidth;
      var oneColWidth = 768;
      var currentPage = 1;
      var navPrev = document.querySelector('.article-index__nav-btn--prev');
      var navNext = document.querySelector('.article-index__nav-btn--next');
      var contentWrapper = tabsElem.querySelector('#article-index-tab-content');
      var pageCount = 1;
      var [activeTab, pageCount, visibleTabWidth, tabGap] = tabControls(tabsElem);
      // console.log([activeTab, pageCount, visibleTabWidth, tabGap]);

      initFilter();

      var tabItems = tabsElem.querySelectorAll('button[data-bs-toggle="tab"]');
      for (var tab of tabItems) {
        tab.addEventListener('shown.bs.tab', function(event) {
          tabControlsClick(tabsElem);
          initFilter();
        })
      }

      var next = function() {
        // console.log('next: currentPage = ' + currentPage + ', pageCount =  ' + pageCount);
        if (currentPage >= pageCount) {
          return;
        }
        currentPage += 1;
        activeTab.style.transform = 'translateX(-' + (visibleTabWidth + tabGap) * (currentPage - 1) + 'px';
        if (currentPage == pageCount) {
          navNext.disabled = true;
          navNext.classList.remove('active');
        }
        if (currentPage > 1) {
          navPrev.disabled = false;
          navPrev.classList.add('active');
        }
      };

      var prev = function() {
        if (currentPage <= 1) {
          return;
        }
        currentPage -= 1;
        activeTab.style.transform = 'translateX(-' + (visibleTabWidth + tabGap) * (currentPage - 1) + 'px';
        if (currentPage == 1) {
          navPrev.disabled = true;
          navPrev.classList.remove('active');
        }
        if (currentPage > 1) {
          navPrev.disabled = false;
          navPrev.classList.add('active');
        }
        if (currentPage < pageCount) {
          navNext.disabled = false;
          navNext.classList.add('active');
        }
      };

      navNext.addEventListener('click', next);
      navPrev.addEventListener('click', prev);

      function tabControlsClick(tabsElem) {
        [activeTab, pageCount, visibleTabWidth, tabGap] = tabControls(tabsElem);
      }


      function tabControls(tabsElem) {
        currentPage = 1;
        var pageCount = 1; /*!!!*/
        navPrev.classList.remove('active');
        navNext.classList.remove('active');
        navPrev.disabled = true;
        navNext.disabled = true;
        var tabs = tabsElem.querySelectorAll(TAB_SELECTOR);
        for (var i = 0; i < tabs.length; i++) {
          tabs[i].style.transform = 'none';
        }
        var contentWrapperStyle = getComputedStyle(contentWrapper);
        var viewWidth = contentWrapper.clientWidth - parseInt(contentWrapperStyle.paddingLeft) - parseInt(contentWrapperStyle.paddingRight);
        var activeTab = tabsElem.querySelector(TAB_SELECTOR + '.active');
        if (!activeTab || activeTab.length == 0) {
          return [activeTab, pageCount];
        }
        var lastLi = activeTab.querySelector('li:last-child');
        if (!lastLi || lastLi.length == 0) {
          return [activeTab, pageCount];
        }
        var lastLiOffset = lastLi.offsetLeft;
        var lastLiWidth = lastLi.clientWidth;
        var fullTabWidth = lastLiOffset + lastLiWidth;
        var visibleTabWidth = activeTab.clientWidth;
        // console.log('visibleTabWidth: ' + visibleTabWidth + ', lastLiWidth: ' + lastLiWidth);
        var tabGap = 0;
        if (screenWidth >= oneColWidth) {
          tabGap = visibleTabWidth - (2 * lastLiWidth);
        }
        // console.log('fullTabWidth : ' + fullTabWidth + ', tabGap : ' + tabGap);
        // console.log(((fullTabWidth + tabGap) / (visibleTabWidth + tabGap)));
        var pageCount = Math.ceil((fullTabWidth + tabGap) / (visibleTabWidth + tabGap)); //!!!
        if (pageCount > 1) {
          navNext.disabled = false;
          navNext.classList.add('active');
        }
        return [activeTab, pageCount, visibleTabWidth, tabGap];
      };

      /*Фильтр*/
      function filterFirstLetter(letter) {
        // console.log('filterFirstLetter: ' + letter);
        var letter = letter.toUpperCase();
        var names = tabsElem.querySelectorAll('.article-index__tab-pane.active a');
        for (var i = 0; i < names.length; i++) {
          names[i].style.display = "block";
          if (names[i].textContent[0].toUpperCase() != letter) {
            names[i].style.display = "none";
            [activeTab, pageCount, visibleTabWidth, tabGap] = tabControls(tabsElem);
          }
        }
      }

      function initFilter() {
        var names = tabsElem.querySelectorAll(TAB_SELECTOR + ' a');
        for (var i = 0; i < names.length; i++) {
          names[i].style.display = "block";
        }
        var letters = document.querySelectorAll('.article-index__alphabet a.active');
        for (var i = 0; i < letters.length; i++) {
          letters[i].classList.remove('active');
        }
        document.querySelector('.article-index__alphabet li:first-child a').classList.add('active');
        letterBig.textContent = 'А';
        filterFirstLetter('А');
      }

    }
  }
});
