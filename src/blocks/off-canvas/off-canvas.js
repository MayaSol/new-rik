/* global document */

const ready = require('../../js/utils/documentReady.js');

ready(function(){

  document.addEventListener('click', function(event) {
    if(event.target.dataset.toggle === 'off-canvas') {
      event.preventDefault();
      offCanvasToggle();
    }
    // возможность совместить переключение off-canvas и встроенную функ-сть
    if(event.target.dataset.toggleNative === 'off-canvas') {
      offCanvasToggle();
    }
  });

  function offCanvasToggle() {
    document.getElementById('off-canvas').classList.toggle('off-canvas--open');
  }

  document.addEventListener('keydown',function() {
    if (event.code === 'Escape') {
      for (canvas of document.querySelectorAll('.off-canvas--open')) {
        canvas.classList.remove('off-canvas--open');
      }
    }
  })

});
