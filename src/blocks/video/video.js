const ready = require('../../js/utils/documentReady.js');
const videoUtils = require('../../js/utils/videoUtils.js');

ready(function() {
  console.log(videoUtils);


      var playBtn = document.querySelector('.video__btn-play');
      if (playBtn) {
        playBtn.addEventListener('click',(event) => {
          event.preventDefault();
          if (video.classList.contains('playing')) {
            videoUtils.pauseVideo(video);
          }
          else {
            videoUtils.playVideo(video);
          }
        });
      }

  var video = document.querySelector('video');
  videoUtils.addEvents(video);
});
