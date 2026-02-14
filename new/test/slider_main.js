import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const ready = require('../../js/utils/documentReady.js');
const getParents = require('../../js/utils/getParents.js');
var closest = require('closest');

ready(function() {
  //!!! В <video> должен быть атрибут muted, чтобы разешить автозапуск и play из js

  // const autoPlayTimeout = 27000;
  const autoPlayTimeout = 3000;
  
  const videos = document.querySelectorAll('.slider-main__media--video-bg video');
  
  if (videos.length > 0) {
    for (let i = 0; i < videos.length; i++) {
      const video = videos[i];
      
      if (i === 0 && video.networkState === 1) {
        initMainSlider();
      }
      
      const playBtn = getParents(video, '.slider-main__media')[0]
        .querySelector('.slider-main__btn-play');
      
      if (playBtn) {
        playBtn.addEventListener('click', event => {
          event.preventDefault();          
          if (video.classList.contains('playing')) {
            pauseVideo(video);
          } else {
            playVideo(video);
          }
        });
      }
      
      // Обработчики событий видео
      video.addEventListener('canplaythrough', event => {
        initMainSlider();
      });
      
      video.addEventListener('pause', () => onStop(video));
      video.addEventListener('ended', () => onEnded(video));
      video.addEventListener('play', () => onPlay(video));
      video.addEventListener('playing', () => onPlay(video));

      // Длительность видео
      video.addEventListener('loadedmetadata', function() {
        console.log('Длительность видео');
        console.log('this: ', this);
        console.log('video: ', video);

        video._duration = this.duration * 1000; // в ms
      });

    }
  }
  
  // Функции управления видео
  function playVideo(videoEl) {
    if (videoEl.getElementsByTagName('source').length > 0) {
      videoEl.play();
      videoEl.controls = true;
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
        sliderMain.play();
      }, videoEl._duration);
    }      
  }
  
  function onStop(videoEl) {
    videoEl.classList.remove('playing');
    videoEl.controls = false;
  }
  
  function onEnded(videoEl) {
    playVideo(videoEl); // Зацикливание видео
  }
  
  // Пауза всех воспроизводящихся видео
  function pauseAll() {
    const playingVideos = document.querySelectorAll('.slider-main__media--video-bg video.playing');
    
    playingVideos.forEach(video => {
      pauseVideo(video);
    });
  }
  
  // Инициализация слайдера
  let sliderMain;
  
  function initMainSlider() {
    if (document.querySelector('.slider-main') && (!sliderMain || !sliderMain.version)) {
      sliderMain = tinySlider.tns({
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
        loop: false,
        
        onInit: function(info) {
          // Автозапуск видео на первом слайде
          const video = info.slideItems[0].querySelector('video');
          playVideo(video);
        }
      });
      
      // Обработчик завершения перехода слайдера
      sliderMain.events.on('transitionEnd', function(info) {
        pauseAll();
        
        // Запуск видео на текущем слайде
        const video = info.slideItems[info.index].querySelector('video');
        if (video) {
          playVideo(video);
        }
        
        // Возврат к первому слайду после последнего
        if (info.index === info.slideCount - 1) {
          setTimeout(() => {
            sliderMain.goTo(0);
            sliderMain.play();
          }, autoPlayTimeout);
        }
      });
    }
  }
})();
