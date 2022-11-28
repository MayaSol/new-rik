const ready = require('../../js/utils/documentReady.js');

ready(function() {
  console.log('cart-page.js');
  var float = document.getElementsByClassName('bx-soa-cart-total');
  console.log(float);
  if (float.length > 0 && document.documentElement.clientWidth >= 1024) {
    var floatBlock = new StickySidebar('.bx-soa-cart-total', {
      containerSelector: '#bx-soa-total',
      // innerWrapperSelector: '.cart-page__total-inner',
      resizeSensor: true,
      topSpacing: 100,
      //   topSpacing: 20,
      //   bottomSpacing: 20
    });
  }

  var bonusBtns = document.getElementsByClassName('bx-soa-coupon-btn');
  for (bonusBtn of bonusBtns) {
    console.log('---------------');
    console.log(bonusBtn);
    let bonusBlock = bonusBtn.closest('.bx-soa-coupon');
    console.log(bonusBlock);
    let removeBonusBtn = bonusBlock.getElementsByClassName('bx-soa-coupon-remove')[0];

    bonusBtn.addEventListener('click', function(event) {
      console.log('bntBonus click');
      console.log(bonusBlock);
      var checked = false;
      var timerId;
      timerId = setInterval(() => { console.log(checked); checked = setBonus(bonusBlock,checked,timerId); }, 300);
      var timerId2 = setTimeout(() => { clearInterval(timerId) }, 9000);
      // if (bonusBlock) {
      //   var successBonuses = bonusBlock.getElementsByClassName('bx-soa-coupon-item-success');
      //   if (successBonuses.length > 0) {
      //     bonusInput && bonusInput.classList.add('hidden');
      //     bonusLabel && bonusLabel.classList.add('hidden');
      //   }
      // }
    })


    removeBonusBtn && removeBonusBtn.addEventListener('click', function(event) {
      console.log('removeBonusBtn');
      let bonusBlock = this.closest('.bx-soa-coupon');
      console.log(bonusBlock);
      let bonusInput = bonusBlock.querySelector('.bx-soa-coupon-input');
      let bonusLabel = bonusBlock.getElementsByClassName('bx-soa-coupon-label')[0];
      console.log(bonusInput);
      bonusInput && bonusInput.classList.remove('!hidden');
      bonusLabel && bonusLabel.classList.remove('!hidden');
    })

  }

  function setBonus(parentEl,checked, timerId) {
    if (checked) {
      return true;
    }
    if (parentEl.getElementsByClassName('bx-soa-coupon-item-success').length > 0) {
      var bonusInput = parentEl.querySelector('.bx-soa-coupon-input input');
      var bonusLabel = parentEl.getElementsByClassName('bx-soa-coupon-label')[0];
      bonusInput && bonusInput.classList.add('!hidden');
      bonusLabel && bonusLabel.classList.add('!hidden');
      clearInterval(timerId);
      return true;
    }
    else {
      return false;
    }
  }

  // timerId = setInterval(() => { setBonus(bonusBlock); }, 300);
  // var timerId2 = setTimeout(() => { clearInterval(timerId) }, 9000);


  // var float = document.querySelector('.cart-page__total');
  // if (float && document.documentElement.clientWidth >= 1024) {
  //   var floatBlock = new StickySidebar('.cart-page__total', {
  //     containerSelector: '.cart-page__aside',
  //     innerWrapperSelector: '.cart-page__total-inner',
  //     resizeSensor: true,
  //     topSpacing: 100,
  //   //   topSpacing: 20,
  //   //   bottomSpacing: 20
  //   });
  // }


});
