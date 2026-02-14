import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const ready = require('../../js/utils/documentReady.js');
const getParents = require('../../js/utils/getParents.js');
var closest = require('closest');

ready(function() {
  //!!! В <video> должен быть атрибут muted, чтобы разешить автозапуск и play из js

  const autoPlayTimeout = 5000;

  const videos = document.querySelectorAll('.slider-main__media--video-bg video');

  let sliderMain;

  if (videos.length > 0) {
    for (let i=0; i<videos.length; i++) {
      const video = videos[i];
      if (i == 0 && video.networkState == 1) {
        initMainSlider();
      }
      const playBtn = getParents(video, '.slider-main__media')[0].querySelector('.slider-main__btn-play');
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
        initMainSlider();
      });
      video.addEventListener('pause', function() {
        onPause(video);
      });
      video.addEventListener('playing', function() {
        onPlay(video);
      });

      // Длительность видео
      video.addEventListener('loadedmetadata', function() {

        video._duration = this.duration * 1000; // в ms
        console.log('video._duration: ', video._duration);
      });      
    }
  }

  function playVideo(videoEl) {
    if (videoEl.getElementsByTagName('source').length > 0) {
      videoEl.controls = true;
      var result = videoEl.play();
    }
  }

  function pauseVideo(videoEl) {
    videoEl.pause();
    videoEl.controls = false;
  }
  
  function onPlay(videoEl) {
    videoEl.classList.add('playing');
    // Запускаем переход к следующему слайду по окончании видео
    if (sliderMain && videoEl._duration) {
      const info = sliderMain.getInfo();
      
      // Останавливаем текущий таймер слайдера
      sliderMain.pause();
      
      // Запускаем переход через длительность видео
      clearTimeout(videoEl._slideTimeout);
      videoEl._slideTimeout = setTimeout(() => {
        console.log('videoEl ended slider play',info.index,info.slideCount);
        if (info.index < info.slideCount - 1) {
          sliderMain.goTo('next');
        } else {
          sliderMain.goTo(0);
        }        
        sliderMain.play();
      }, videoEl._duration);
    }       
  }

  function onPause(videoEl) {
    console.log('onPause');
    videoEl.classList.remove('playing');
    videoEl.controls = false;
    clearTimeout(videoEl._slideTimeout); 
    sliderMain.play();
  }

  var pauseAll = function() {
    var playingVideos = document.querySelectorAll('.slider-main__media--video-bg video.playing');

    if (playingVideos.length > 0) {
      for (var video of playingVideos) {
        pauseVideo(video);
      }
    }
  };


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
            const video = info.slideItems[0].querySelector('video');
            playVideo(video);
          }
        });

        sliderMain.events.on('transitionEnd', function(info) {
          console.log('transitionEnd info.index',info.index);
          pauseAll();
          var video = info.slideItems[info.index].querySelector('video');
          console.log('!!! SLIDER-MAIN video', video);
          video.setAttribute('autoplay', 'autoplay');
      
          if (video) {
            playVideo(video);
          }
          // if (info.index === info.slideCount - 1) {
          //   var timerId = setTimeout(function() {
          //     sliderMain.goTo(0);
          //     sliderMain.play();
          //   }, autoPlayTimeout);
          // }
        });
      }
    }
  } //function initMainSlider()


});
