const ready = require('../../js/utils/documentReady.js');

ready(function() {
  console.log('cart-page.js');

  var float = document.querySelector('#bx-soa-total .bx-soa-cart-total');
  console.log(float);
  if (float) {
    var floatBlock = new StickySidebar('#bx-soa-total .bx-soa-cart-total', {
      containerSelector: '#bx-soa-total',
      innerWrapperSelector: '.bx-soa-cart-total-data',
      resizeSensor: true,
      topSpacing: 100,
    //   topSpacing: 20,
    //   bottomSpacing: 20
    });
    console.log(floatBlock);
  }

  var timerId = [];
  var timerId2 = [];

  //Применение купона
  var bonusBtns = document.querySelectorAll('#bx-soa-total .bx-soa-coupon-btn');
  console.log(bonusBtns);
  for (var i = 0; i < bonusBtns.length; i++) {
    console.log(i);
    let bonusBtn = bonusBtns[i];
    console.log(bonusBtn);
    let bonusBlock = bonusBtn.closest('.bx-soa-coupon');
    console.log(bonusBlock);

    //Если купон применен, показать его
    // setBonus(bonusBlock,false);

    let removeBonusBtns = document.querySelectorAll('.bx-soa-coupon-remove');
    console.log(removeBonusBtns);
    for (removeBonusBtn of removeBonusBtns) {
      removeBonusBtn.addEventListener('click', function(event) {
        console.log('removeBonusBtn.addEventListener(click)');
        removeBonusBtnClick(event);
      }, { once: true })
    }


    // bonusBtn.addEventListener('click', function(event) {
    //   console.log('bntBonus click');
    //   console.log(bonusBlock);

    //   //!!!test
    //   // console.log('test');
    //   // var item = bonusBlock.querySelector('.bx-soa-coupon-item');
    //   // console.log(item);
    //   // var timerTest = setTimeout(() => {
    //   //   item.innerHTML = '<div data-coupon="WWE88" class="bx-soa-coupon-item-success">' +
    //   // '<div class="bx-soa-coupon-title-bonus">Промокод применен</div>' +
    //   // '<div class="bx-soa-coupon-bonus-name">Промокод «WWE88»</div>' +
    //   // '<span class="bx-soa-coupon-remove bx-soa-coupon-delete">Удалить</span>' +
    //   // '</div>' +
    //   // '<div data-coupon="test" class="bx-soa-coupon-item-danger" style="position: relative;"><div class="bx-soa-coupon-title-bonus">Промокод применен</div><div class="bx-soa-coupon-bonus-name">Промокод «test»</div><span class="bx-soa-coupon-remove bx-soa-coupon-delete">Удалить</span></div>';
    //   // }, 3000);
    //   // //!!!

    //   // var checked = false;
    //   // timerId[i] = setInterval(() => { console.log(checked); checked = setBonus(bonusBlock,checked,timerId[i]); }, 300);
    //   // timerId2[i] = setTimeout(() => { clearInterval(timerId[i]) }, 9000);

    // })
  }

  var removeBonusBtnClick = function(event) {
    console.log('removeBonusBtnClick');
    console.log(event.target);
    let parent = event.target.closest('div');
    parent && parent.remove();
  }

  function setBonus(parentEl, checked, timerId) {
    console.log(`setBonus: ${checked} ${timerId}`);
    console.log(parentEl);
    console.log(document.querySelectorAll('#bx-soa-total .bx-soa-coupon-item-success'));
    if (checked) {
      return true;
    }
    if (document.querySelectorAll('#bx-soa-total .bx-soa-coupon-item-success').length > 0) {
      console.log('1');
      // var bonusInput = document.querySelector('#bx-soa-total .bx-soa-coupon-input');
      // var bonusLabel = document.querySelector('#bx-soa-total .bx-soa-coupon-label');
      var bonusItem = document.querySelector('#bx-soa-total .bx-soa-coupon-item');
      // bonusInput && bonusInput.classList.add('!hidden');
      // bonusLabel && bonusLabel.classList.add('!hidden');
      bonusItem && bonusItem.classList.remove('!hidden');
      timerId && clearInterval(timerId);
      console.log(bonusItem);
      console.log(bonusItem.classList);
      let removeBonusBtns = document.querySelectorAll('#bx-soa-total .bx-soa-coupon-remove');
      console.log('removeBonusBtns');
      console.log(removeBonusBtns);
      for (removeBonusBtn of removeBonusBtns) {
        removeBonusBtn.addEventListener('click', function(event) {
          removeBonusBtnClick(event);
        }, { once: true })
      }
      return true;
    } else {
      return false;
    }
  }


});
