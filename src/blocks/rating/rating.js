const ready = require('../../js/utils/documentReady.js');
import RateYo from 'rateyo';

ready(function() {
  console.log(RateYo);
  var ratings = document.querySelectorAll('.rating__stars--view');
  console.log(ratings);
  for (var rating of ratings) {
    console.log(rating);
    if (rating.dataset.value) {
      RateYo(rating,{
        rating: rating.dataset.value,
        readOnly: true,
        starWidth: '24px',
        normalFill: '#EBEBEB',
        ratedFill: '#FFA51E',
        spacing: '6px',
        starSvg: '<svg width="24.20652" height="23.169928" viewBox="0 0 24.20652 23.169928" xmlns="http://www.w3.org/2000/svg"><path d="m 10.676656,1.0364703 c 0.449,-1.38196408 2.4042,-1.38196003 2.8532,1e-5 l 1.8289,5.62867 c 0.2008,0.61804 0.7767,1.03648 1.4265,1.03648 h 5.9184 c 1.4531,0 2.0572,1.85942 0.8817,2.7135697 l -4.7881,3.4787 c -0.5257,0.3819 -0.7457,1.059 -0.5449,1.677 l 1.8289,5.6287 c 0.449,1.382 -1.1327,2.5311 -2.3083,1.677 l -4.788,-3.4787 c -0.5258,-0.3819 -1.2376,-0.3819 -1.7634,0 l -4.7880198,3.4787 c -1.17557,0.8542 -2.75729,-0.295 -2.30826,-1.677 l 1.82887,-5.6287 c 0.20081,-0.618 -0.01918,-1.2951 -0.54491,-1.677 L 0.62119624,10.4152 c -1.17557,-0.8541497 -0.571404,-2.7135697 0.88167996,-2.7135697 h 5.91834 c 0.64984,0 1.22578,-0.41844 1.42659,-1.03648 z"/></svg>'
      })
    }
  }
});
