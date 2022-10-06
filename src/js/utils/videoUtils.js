var videoUtils = {};


var playVideo=function(videoEl) {
  var result = videoEl.play();
  videoEl.controls = true;
}

videoUtils.playVideo = playVideo;

var pauseVideo=function(videoEl) {
    videoEl.pause();
    videoEl.controls = false;
}

videoUtils.pauseVideo = pauseVideo;


var onPlay = function(video) {
  video.classList.add('playing');
}

videoUtils.onPlay = onPlay;

var onStop = function(video) {
  video.classList.remove('playing');
  video.controls = false;
}

videoUtils.onStop = onStop;

var onEnded = function (video) {
  video.classList.remove('playing');
  video.controls = false;
  var info = sliderMain.getInfo();
  if (info.index < info.slideCount-1) {
    sliderMain.goTo(info.index + 1);
  }
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
