const ready = require('../../js/utils/documentReady.js');
const getParents = require('../../js/utils/getParents.js');

ready(function() {
  let carts = document.querySelectorAll('.cart');

  for (cart of carts) {
    cart.addEventListener('click', function() {
      showCart(this);
    });

    cart.addEventListener('mouseenter', function() {
      showCart(this);
    })

    document.addEventListener('click', function() {
      let parent = getParents(event.target, '.cart');
      if (!event.target.classList.contains('cart') && parent.length == 0) {
        for (cart of document.querySelectorAll('.cart')) {
          hideCart(cart);
        }
      }
    })

    cart.addEventListener('mouseleave', function() {
      hideCart(this);
    })
  }


  function showCart(cartEl) {
    let asideParent = getParents(cartEl, '.cart-aside');
    if (asideParent.length > 0) {
      asideParent[0].classList.add('active');
    }
    cartEl.classList.add('cart--show');
  }

  function hideCart(cartEl) {
    if (cartEl.classList.contains('cart--show')) {
      cartEl.classList.remove('cart--show');
    }
  }

});
