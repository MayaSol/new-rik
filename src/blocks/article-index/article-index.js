const ready = require('../../js/utils/documentReady.js');

ready(function() {

  /*Буквы*/
  var letterBig = document.querySelector('.article-index__letter-active');

  if (letterBig) {

    document.querySelector('.article-index__alphabet').addEventListener('click', letterClick);

    function letterClick(event) {
      event.preventDefault();
      if (event.target.classList.contains('article-index__letter')) {
        var letterActive = this.querySelector('.active');
        if (letterActive) {
          letterActive.classList.remove('active');
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
      var contentWrapper = document.getElementById('article-index-tab-content');
      var pageCount = 1;
      var [activeTab, pageCount, visibleTabWidth, tabGap] = [];
      var lettersActive;

      navPrev.disabled = false;
      navPrev.classList.add('active');
      navNext.disabled = false;
      navNext.classList.add('active');
      navPrev.addEventListener('click',prev);
      navNext.addEventListener('click',next)

      initFilter();

      var tabItems = tabsElem.querySelectorAll('button[data-bs-toggle="tab"]');
      for (var tab of tabItems) {
        tab.addEventListener('shown.bs.tab', function(event) {
          tabControls(tabsElem);
          initFilter();
        })
      }

      //При клике на стрелку Вперед на последней странице для текущей Буквы переход на следующую букву
      function nextLetter() {
        var nextLetter;
        for (var i=0; i < lettersActive.length; i++) {
          if (lettersActive[i].classList.contains('active')) {
            if (i == lettersActive.length - 1) {
              nextLetter = lettersActive[0];
            }
            else {
              nextLetter = lettersActive[i+1];
            }
            nextLetter.dispatchEvent(new Event('click',{ bubbles: true }));
            break;
          }
        }
      }

      //При клике на стрелку Назад на последней странице для текущей Буквы переход на предыдущую букву
      function prevLetter() {
        console.log('prevLetter');
        var prevLetter;
        for (var i=0; i < lettersActive.length; i++) {
          if (lettersActive[i].classList.contains('active')) {
            if (i == 0) {
              prevLetter = lettersActive[lettersActive.length - 1];
            }
            else {
              prevLetter = lettersActive[i-1];
            }
            console.log(prevLetter);
            prevLetter.dispatchEvent(new Event('click',{ bubbles: true }));
            break;
          }
        }
      }

      function next() {
        // console.log('next: currentPage = ' + currentPage + ', pageCount =  ' + pageCount);
        if (currentPage < pageCount) {
          currentPage += 1;
          activeTab.style.transform = 'translateX(-' + (visibleTabWidth + tabGap) * (currentPage - 1) + 'px';
        }
        else {
          nextLetter();
        }
        // if (currentPage == pageCount) {
        //   navNext.removeEventListener('click', next, false);
        //   navNext.addEventListener('click',nextLetter, {once: 'true'});
        //   // navNext.disabled = true;
        //   // navNext.classList.remove('active');
        // }
        // if (currentPage > 1) {
        //   navPrev.disabled = false;
        //   navPrev.classList.add('active');
        //   navPrev.removeEventListener('click',prevLetter,false);
        //   navPrev.addEventListener('click',prev, {once: 'true'});
        // }
        // else if (currentPage == 1) {
        //   navPrev.removeEventListener('click',prev,false);
        //   navPrev.addEventListener('click',prevLetter, {once: 'true'});
        // }
      };

      function prev() {
        if (currentPage > 1) {
          currentPage -= 1;
          activeTab.style.transform = 'translateX(-' + (visibleTabWidth + tabGap) * (currentPage - 1) + 'px';
        }
        else {
          prevLetter();
        }
        // if (currentPage < pageCount) {
        //   navNext.disabled = false;

        // }
        // if (currentPage == 1) {
        //   navPrev.disabled = false;
        //   navPrev.classList.add('active');
        //   navPrev.removeEventListener('click',prev, false);
        //   navPrev.addEventListener('click',prevLetter, {once: 'true'});
        // }
        // if (currentPage > 1) {
        //   navPrev.disabled = false;
        //   navPrev.classList.add('active');
        //   navPrev.removeEventListener('click',prevLetter, false);
        //   navPrev.addEventListener('click',prev, {once: 'true'});
        // }
        // if (currentPage < pageCount) {
        //   navNext.disabled = false;
        //   navNext.classList.add('active');
        //   navNext.removeEventListener('click',nextLetter,false);
        //   navNext.addEventListener('click',next);
        // }
      };

      // function tabControlsClick(tabsElem) {
      //   [activeTab, pageCount, visibleTabWidth, tabGap] = tabControls(tabsElem);
      // }

      function tabControls(tabsElem) {
        currentPage = 1;
        var pageCount = 1; /*!!!*/
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
        // console.log(pageCount);
        // if (pageCount > 1) {
        //   navNext.disabled = false;
        //   navNext.classList.add('active');
        //   navNext.removeEventListener('click',nextLetter,false);
        //   navNext.addEventListener('click', next, {once: true});
        // }
        // else {
        //   navNext.disabled = false;
        //   navNext.classList.add('active');
        //   navNext.removeEventListener('click',next,false);
        //   navNext.addEventListener('click', nextLetter, {once: 'true'});
        // }
        return [activeTab, pageCount, visibleTabWidth, tabGap];
      };

      /*Фильтр*/
      function filterFirstLetter(letter) {
        var letter = letter.toUpperCase();
        var tabActive = tabsElem.querySelector('.article-index__tab-pane.active');
        var names = tabActive.querySelectorAll('a');
        for (var i = 0; i < names.length; i++) {
          names[i].style.display = "block";
          if (names[i].textContent[0].toUpperCase() != letter) {
            names[i].style.display = "none";
          //!!!
          }
        }
        //!!!
        [activeTab, pageCount, visibleTabWidth, tabGap] = tabControls(tabsElem);
      }

      function initFilter() {
        console.log('initFilter');
        var names = tabsElem.querySelectorAll(TAB_SELECTOR + ' a');
        for (var i = 0; i < names.length; i++) {
          names[i].style.display = "block";
        }
        var lettersAll = document.querySelectorAll('.article-index__alphabet a');
        for (var i = 0; i < lettersAll.length; i++) {
          lettersAll[i].classList.remove('active');
          lettersAll[i].removeAttribute('disabled');
        }
        //
        var activeTabItems = document.querySelectorAll('.article-index__tab-pane.active li');
        // console.log('activeTabItems');
        // console.log(activeTabItems);
        // var lettersAll = document.querySelectorAll('.article-index__alphabet a');
        // console.log(lettersAll);
        var activeTabItemsArr = Array.from(activeTabItems);
        console.log(activeTabItemsArr);
        for (var letter of lettersAll) {
          let sum = activeTabItemsArr.find(
            item => {
              return item.textContent.replace(/\s+/g, '')[0].toUpperCase() == letter.innerHTML
            }
          );
          // console.log(letter.innerHTML + ': ');
          // console.log(sum);
          if (typeof sum === 'undefined') {
            letter.setAttribute('disabled','');
          }
        }
        lettersActive = document.querySelectorAll('.article-index__alphabet a:not([disabled])');
        var firstActvieLetter = document.querySelector('.article-index__alphabet li a:not([disabled])');
        if (firstActvieLetter) {
          firstActvieLetter.classList.add('active');
          letterBig.textContent = firstActvieLetter.innerText;
          filterFirstLetter(firstActvieLetter.innerText);
        }
      }//initFilter

    }
  }
});
