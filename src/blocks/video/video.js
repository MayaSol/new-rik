const ready = require('../../js/utils/documentReady.js');
const videoUtils = require('../../js/utils/videoUtils.js');
const closest = require('closest');

ready(function() {

  var playBtns = document.querySelectorAll('.video__btn-play');
  for (btn of playBtns) {
    btn.addEventListener('click',function(event) {
      console.log('click');
      event.preventDefault();
      var video = closest(this,'.video');
      if (video.classList.contains('playing')) {
        videoUtils.pauseVideo(video.querySelector('video'));
      }
      else {
        console.log('play');
        console.log(video.querySelector('video'));
        videoUtils.playVideo(video.querySelector('video'));
      }
    });
  }

  var videos = document.querySelectorAll('.video video');
  for (video of videos) {
    videoUtils.addEvents(video);
  }
});
