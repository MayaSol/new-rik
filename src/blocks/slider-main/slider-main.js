import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const ready = require('../../js/utils/documentReady.js');
const getParents = require('../../js/utils/getParents.js');
var closest = require('closest');

ready(function() {
  //!!! В <video> должен быть атрибут muted, чтобы разешить автозапуск и play из js

  // var videos = document.querySelectorAll('.slider__bg-video video');

  // console.log(videos);

  // for (var el of videos) {
  //   console.log(el);
  //   fitVideo(el);
  // }



  var videos = document.querySelectorAll('.slider-main__media--video-bg video');
  if (videos.length > 0) {
    for (let video of videos) {
      var playBtn = getParents(video,'.slider-main__media')[0].querySelector('.slider-main__btn-play');
      if (playBtn) {
        playBtn.addEventListener('click',(event) => {
          event.preventDefault();
          if (video.classList.contains('playing')) {
            pauseVideo(video);
          }
          else {
            playVideo(video);
          }
        });
      }
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
  }

  function playVideo(videoEl) {
    var result = videoEl.play();
    videoEl.controls = true;
  }

  function pauseVideo(videoEl) {
    videoEl.pause();
    videoEl.controls = false;
  }

  function onPlay(videoEl) {
    videoEl.classList.add('playing');
  }

  function onStop(videoEl) {
    videoEl.classList.remove('playing');
    videoEl.controls = false;
  }

  function onEnded(videoEl) {
    videoEl.classList.remove('playing');
    videoEl.controls = false;
    var info = sliderMain.getInfo();
    if (info.index < info.slideCount-1) {
      sliderMain.goTo(info.index + 1);
    }
  }

  var pauseAll = function() {
    var playingVideos = document.querySelectorAll('.slider-main__media--video-bg video.playing');

    if (playingVideos.length > 0) {
      for (var video of playingVideos) {
        pauseVideo(video);
      }
    }
  };

  if (document.querySelector('.slider-main')) {

    var sliderMain = tns({
      container: '.slider-main',
      items: 1,
      slideBy: 1,
      // mouseDrag: false,
      controls: true,
      nav: false,
      loop: false,
      onInit: function(info) {
        console.log('onINit');
        var video = info.slideItems[0].querySelector('video');
        playVideo(video);
      }
      // preventScrollOnTouch: 'force'
    });

    sliderMain.events.on('transitionEnd', function(info) {
      pauseAll();
      var video = info.slideItems[info.index].querySelector('video');
      if (video) {
        playVideo(video);
      }
    });
  }


});


// var minW = 300;


// function fitVideo(videoEl) {


//     var videoWidth = parseInt(videoEl.getAttribute('width'));
//     var videoHeight = parseInt(videoEl.getAttribute('height'));

//     console.log(videoWidth);
//     console.log(videoHeight);

//     var videoContainer = getParents(videoEl,'.slider__wrapper')[0];
//     console.log(videoContainer);

//     console.log(videoContainer.clientWidth);



//     var scaleH = videoContainer.clientWidth / videoWidth;
//     var scaleV = videoContainer.clientHeight / videoHeight;
//     var scale = scaleH > scaleV ? scaleH : scaleV;

//     console.log(scaleH + ', ' + scaleV + ', ' + scale);

//     if (scale * videoWidth < minW) {scale = minW / videoWidth;};

//     console.log(scale);

//     // videoWidth

//     var w = scale * videoWidth + 'px';
//     console.log(w);

//     videoEl.style.width = scale * videoWidth + 'px';
//     videoEl.style.height = scale * videoHeight + 'px';

//     console.log(videoEl.style.width);

// };
