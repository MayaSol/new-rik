const ready = require('../../js/utils/documentReady.js');

ready(function() {
  // var structureBtns = document.querySelectorAll('.structure-tabs__btn');
  // for (btn of structureBtns) {
  //   (btn.classList.contains('active')) ? btn.allowToClose = true: btn.allowToClose = false;
  //   btn.justShown = false;

  //   btn.addEventListener('shown.bs.tab', event => {
  //     event.target.justShown = true; // newly activated tab
  //     console.log('shown');
  //     console.log(this.allowToClose);
  //     console.log(this.justShown);

  //     // event.relatedTarget // previous active tab
  //   })

  //   btn.addEventListener('hidden.bs.tab', event => {
  //     event.target.justShown = false; // newly activated tab
  //     // event.relatedTarget // previous active tab
  //     console.log('hidden');
  //     console.log(this.allowToClose);
  //     console.log(this.justShown);
  //   })

  //   btn.addEventListener('click', function(event) {
  //     console.log('structureBtn close');
  //     console.log(this.allowToClose);
  //     console.log(this.justShown);
  //     if (this.allowToClose && this.classList.contains('active')) {
  //       this.classList.remove('active');
  //       console.log(document.querySelector(this.dataset.bsTarget));
  //       var pane = document.querySelector(this.dataset.bsTarget);
  //       if (pane) {
  //         pane.classList.remove('active');
  //         pane.classList.remove('show');
  //       }
  //     }
  //     if (this.justShown) {
  //       this.allowToClose = true;
  //     }
  //     else {
  //       this.allowToClose = false;
  //     }
  //     console.log('-----------------');
  //     console.log(this.allowToClose);
  //     console.log(this.justShown);
  //   })
  // }
});
