const ready = require('../../js/utils/documentReady.js');

ready(function() {
    /*Буквы*/
    document.querySelector('.article-index__alphabet').addEventListener('click',letterClick);

    function letterClick(event) {
        event.preventDefault();
        if (event.target.classList.contains('article-index__letter')) {
            var letters = this.querySelectorAll('.article-index__letter.active');
            for (var i=0; i<letters.length; i++) {
                letters[i].classList.remove('active');
            }
            event.target.classList.add('active');
            var letterBig = this.closest('.article-index').querySelector('.article-index__letter-active span');
            console.log(letterBig);
            letterBig.textContent = event.target.innerHTML;
            // filterFirstLetter(letterBig.textContent);
        }
    }
});
