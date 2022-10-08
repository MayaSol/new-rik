const ready = require('../../js/utils/documentReady.js');

ready(function() {
  var loadInputs = document.querySelectorAll('.load-file__input');

  for (input of loadInputs)
  {
    input.addEventListener('change',function() {
      var fileName = this.value.substr(this.value.lastIndexOf('\\') + 1);
      console.log(fileName);
      console.log(this.files[0].size);
      console.log(this.files[0].size*10/1024);
      console.log(Math.floor(this.files[0].size*10/1024)/10);
      var fileInfo;
      var next = this.nextElementSibling;
      while (next) {
        if (next.classList.contains('load-file__info')) {
          fileInfo = next;
          break;
        }
        next = next.nextElementSibling;
      }
      if (fileInfo) {
        fileInfo .innerHTML = this.files[0].name + ', ' + (Math.floor(this.files[0].size*10/1024)/10) + ' Мб';
      }
    })
  }
});
