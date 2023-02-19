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



  const autoPlayTimeout = 27000;


  var videos = document.querySelectorAll('.slider-main__media--video-bg video');
  // console.log(videos);
  if (videos.length > 0) {
    for (let i=0; i<videos.length; i++) {
      let video = videos[i];
      // console.log(video.networkState);
      if (i == 0 && video.networkState == 1) {
        initMainSlider();
      }
      // console.log(video.getElementsByTagName('source'));
      // console.log(video.getElementsByTagName('source')[0].src);
      var playBtn = getParents(video, '.slider-main__media')[0].querySelector('.slider-main__btn-play');
      if (playBtn) {

        playBtn.addEventListener('click', (event) => {
          event.preventDefault();
          if (video.classList.contains('playing')) {
            pauseVideo(video);
          } else {
            playVideo(video);
          }
        });
      }
      //Добавить playBtn класс hidden и и убирать после начала проигрывания
      video.addEventListener('canplaythrough', (event) => {
        // console.log('canplaythrough');
        initMainSlider();
      });
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

      //
      video.addEventListener('loaded',function() {
        console.log('loaded');
      })

  //!!!
// function handleEvent(event) {
//     console.log('-----------');
//     console.log(`${event.type}`);
//     console.log(event.target.getElementsByTagName('source')[0].src);
//     console.log(event.target.networkState);
// }

// video.addEventListener('loadstart', handleEvent);
// video.addEventListener('progress', handleEvent);
// video.addEventListener('canplay', handleEvent);
// video.addEventListener('canplaythrough', handleEvent);
//!!!
    }
  }

  function playVideo(videoEl) {
    if (videoEl.getElementsByTagName('source').length > 0) {
      var result = videoEl.play();
      videoEl.controls = true;
    }
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
    // videoEl.classList.remove('playing');
    // videoEl.controls = false;
    playVideo(videoEl);
    // var info = sliderMain.getInfo();
    // if (info.index < info.slideCount-1) {
    //   sliderMain.goTo(info.index + 1);
    // }
  }

  var pauseAll = function() {
    var playingVideos = document.querySelectorAll('.slider-main__media--video-bg video.playing');

    if (playingVideos.length > 0) {
      for (var video of playingVideos) {
        pauseVideo(video);
      }
    }
  };

  var sliderMain;

  function initMainSlider() {
    if (document.querySelector('.slider-main')) {

      if (!sliderMain || !sliderMain.version) {

        sliderMain = tns({
          container: '.slider-main',
          items: 1,
          slideBy: 1,
          mode: 'gallery',
          autoplay: true,
          autoplayHoverPause: false,
          autoplayTimeout: autoPlayTimeout,
          autoplayButtonOutput: false,
          mouseDrag: false,
          controls: true,
          speed: 1000,
          // nav: false,
          loop: false,
          onInit: function(info) {
            var video = info.slideItems[0].querySelector('video');
            playVideo(video);
          }
        });

        sliderMain.events.on('transitionEnd', function(info) {
          // console.log('transitionEnd');
          // console.log(info);
          pauseAll();
          var video = info.slideItems[info.index].querySelector('video');
          if (video) {
            playVideo(video);
          }
          if (info.index === info.slideCount - 1) {
            var timerId = setTimeout(function() {
              sliderMain.goTo(0);
              sliderMain.play();
            }, autoPlayTimeout);
          }
        });
      }
    }
  } //function initMainSlider()


});
