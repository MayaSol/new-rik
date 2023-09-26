const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');
import lightGallery from 'lightgallery';
import lgVideo from 'lightgallery/plugins/video';


ready(function() {
  if (document.querySelector('.info-card__video-wrapper')) {

    var infoVideos = document.querySelectorAll('.info-card__video-wrapper');
    for (var i=0; i<infoVideos.length; i++) {
      lightGallery(infoVideos[i], {
        plugins: [lgVideo],
      });
    }
  }


});
