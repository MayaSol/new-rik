const ready = require('../../js/utils/documentReady.js');
const {Cart} = require('../cart/cart.js');

// import tippy from 'tippy.js';

ready(function() {
  // var tippyOptionsDefault = {
  //   content: 'replace it',
  //   allowHTML: true,
  //   interactive: true,
  //   animation: 'fade',
  //   duration: 500,
  //   offset: [60, 10],
  //   // trigger: 'click'
  // };

  // function setContent(to, from, deleteClass) {
  //   return `<div class="tooltip tooltip--actions"><ul>` +
  //     `<li><a class="btn btn--clean" href="#"><span>Перейти</span> ${to}</a></li>` +
  //     `<li><button class="btn btn--clean btn--${deleteClass}"><span>Удалить</span> ${from}</button></li>` +
  //     `</ul></div>`;
  // }

  //Корзина

  // function tippyCart() {
  //   var tippyOptionsCart = tippyOptionsDefault;
  //   tippyOptionsCart.content = setContent('в корзину', 'из корзины', 'cart-delete');
  //   tippyOptionsCart = { ...tippyOptionsCart, onMount(instance) { console.log('onMount');
  //       setDeleteCart(instance) } };


    var addBtns = document.querySelectorAll('.product-actions .btn--cart-add');
    // var tippyInstance;
    for (let btn of addBtns) {
      // if (btn.classList.contains('btn--in-cart')) {
      //   var tippyInstance = tippy(btn, tippyOptionsCart);
      // }
      btn.addEventListener('click', function(event) {
        console.log('btn add cart click');
        event.preventDefault();
        if (!this.classList.contains('btn--in-cart')) {
          this.classList.add('btn--in-cart');
          Cart.setCartHasGoods(true);
          // tippyInstance = tippy(btn, tippyOptionsCart);
          // tippyInstance.show();
          // var timerId = setTimeout(tippyInstance.hide, 2000);
        }
      })
    }
  // }

  // tippyCart();

  // function setDeleteCart(instance) {
  //   console.log('setDeleteCart');
  //   var deleteBtn = instance.popper.querySelector('.btn--cart-delete');
  //   if (deleteBtn) {
  //     deleteBtn.addEventListener('click', function(event) {
  //       console.log('click');
  //       instance.reference.classList.remove('btn--in-cart');
  //       instance.hide();
  //       instance.destroy();
  //     })
  //     console.log(deleteBtn);
  //   }
  // }

  //Избранное
  // function tippyFav() {
    // var tippyOptionsFav = tippyOptionsDefault;
    // tippyOptionsFav.content = setContent('в избранное', 'из избранного', 'fav-delete');
    // tippyOptionsFav = { ...tippyOptionsFav, onMount(instance) { setDeleteFav(instance) } };;


    var addBtns = document.querySelectorAll('.product-actions .btn--fav-add');
    for (let btn of addBtns) {
    //   if (btn.classList.contains('btn--in-fav')) {
    //     let tippyInstance = tippy(btn, tippyOptionsFav);
    //   }
      btn.addEventListener('click', function(event) {
        event.preventDefault();
        if (!this.classList.contains('btn--in-fav')) {
          this.classList.add('btn--in-fav');
          Cart.setFavHasGoods(true);
          // var tippyInstance = tippy(btn, tippyOptionsFav);
          // tippyInstance.show();
          // var timerId = setTimeout(tippyInstance.hide, 2000);
        }
      })
    }
  // }

  // tippyFav();

  // function setDeleteFav(instance) {
  //   var deleteBtn = instance.popper.querySelector('.btn--fav-delete');
  //   if (deleteBtn) {
  //     deleteBtn.addEventListener('click', function(event) {
  //       instance.reference.classList.remove('btn--in-fav');
  //       instance.hide();
  //       instance.destroy();
  //     })
  //   }
  // }


  //Сравнение
  // function tippyCompare() {
    // var tippyOptionsCompare = tippyOptionsDefault;
    // tippyOptionsCompare.content = setContent('в сравнение', 'из сравнения', 'compare-delete');
    // tippyOptionsCompare = { ...tippyOptionsCompare, onMount(instance) { setDeleteCompare(instance) } };;


    var addBtns = document.querySelectorAll('.product-actions .btn--compare-add');
    for (let btn of addBtns) {
      // if (btn.classList.contains('btn--in-fav')) {
      //   let tippyInstance = tippy(btn, tippyOptionsFav);
      // }
      btn.addEventListener('click', function(event) {
        event.preventDefault();
        if (!this.classList.contains('btn--in-compare')) {
          this.classList.add('btn--in-compare');
          // var tippyInstance = tippy(btn, tippyOptionsCompare);
          // tippyInstance.show();
          // var timerId = setTimeout(tippyInstance.hide, 2000);
        }
      })
    }
  // }

  // tippyCompare();

  // function setDeleteCompare(instance) {
  //   var deleteBtn = instance.popper.querySelector('.btn--compare-delete');
  //   if (deleteBtn) {
  //     deleteBtn.addEventListener('click', function(event) {
  //       instance.reference.classList.remove('btn--in-compare');
  //       instance.hide();
  //       instance.destroy();
  //     })
  //   }
  // }




});
