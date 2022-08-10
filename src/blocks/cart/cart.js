const ready = require('../../js/utils/documentReady.js');
const getParents = require('../../js/utils/getParents.js');

ready(function() {
  let carts = document.querySelectorAll('.cart');

  for (cart of carts) {
    cart.addEventListener('click',function() {
      this.classList.add('cart--show');
    });

    document.addEventListener('click',function() {
      console.log('click cart');
      let parent = getParents(event.target,'.cart');
      console.log(parent);
      if (!event.target.classList.contains('cart') && parent.length == 0) {
        for (cart of document.querySelectorAll('.cart')) {
          if (cart.classList.contains('cart--show')) {
            cart.classList.remove('cart--show');
          }
        }
      }
    })
  }


});
