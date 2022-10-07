var closest = require('closest');

//Класс playing добавляется к элементу с классом .video (проверяет тег <video/> и его родителей)

var videoUtils = {};

var playVideo=function(video) {
  // var result = videoEl.play();
  console.log('playVideo');
  console.log(video);
  video.play();
  video.setAttribute('controls',true);
}

videoUtils.playVideo = playVideo;

var pauseVideo=function(video) {
    video.pause();
    video.controls = false;
}

videoUtils.pauseVideo = pauseVideo;


var onPlay = function(video) {
  console.log('onPlay');
  var elem = closest(video,'.video',true);
  elem.classList.add('playing');
}

videoUtils.onPlay = onPlay;

var onStop = function(video) {
  var elem = closest(video,'.video',true);
  elem.classList.remove('playing');
  video.controls = false;
}

videoUtils.onStop = onStop;

var onEnded = function (video) {
  var elem = closest(video,'.video',true);
  elem.classList.remove('playing');
  video.controls = false;
}

videoUtils.onEnded = onEnded;

videoUtils.addEvents = function(video) {
  video.addEventListener('pause', function() {
    onStop(video);
  });
  video.addEventListener('ended', function() {
    onEnded(video);
  });
  video.addEventListener('play', function() {
    onPlay(video);
  });
  video.addEventListener('playing', function() {
    onPlay(video);
  });
}

module.exports = videoUtils;
