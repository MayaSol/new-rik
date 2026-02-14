(function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
  "use strict";
  
  // Импорт зависимостей
  __webpack_require__.r(__webpack_exports__);
  const tinySlider = __webpack_require__("./node_modules/tiny-slider/src/tiny-slider.js");
  const ready = __webpack_require__("./src/js/utils/documentReady.js");
  const getParents = __webpack_require__("./src/js/utils/getParents.js");
  const closest = __webpack_require__("./node_modules/closest/index.js");

  // Инициализация после загрузки DOM
  ready(function() {
    const autoPlayTimeout = 27000;
    const videos = document.querySelectorAll('.slider-main__media--video-bg video');
    
    if (videos.length > 0) {
      // Обработка каждого видео
      for (let i = 0; i < videos.length; i++) {
        const video = videos[i];
        
        // Инициализация слайдера для первого готового видео
        if (i === 0 && video.networkState === 1) {
          initMainSlider();
        }
        
        // Добавление обработчика для кнопки play
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
  });
})();