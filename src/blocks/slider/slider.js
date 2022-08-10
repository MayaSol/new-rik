import { tns } from "../../../node_modules/tiny-slider/src/tiny-slider";
const ready = require('../../js/utils/documentReady.js');
const getParents = require('../../js/utils/getParents.js');

ready(function() {

  // var videos = document.querySelectorAll('.slider__bg-video video');

  // console.log(videos);

  // for (var el of videos) {
  //   console.log(el);
  //   fitVideo(el);
  // }

  var videos = document.querySelectorAll('.slider__media--video-bg video');
  console.log(videos);

  if (videos.length > 0) {
    for (let video of videos) {
      console.log(video);
      var playBtn = getParents(video,'.slider__media')[0].querySelector('.slider__btn-play');
      if (playBtn) {
        playBtn.addEventListener('click',(event) => {
          console.log('playBtn on click');
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
        onStop(video);
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
    console.log('playVideo');
    console.log(videoEl);
    console.log(videoEl.play);

    videoEl.play();
    videoEl.controls = true;
  }

  function pauseVideo(videoEl) {
    console.log('pauseVideo');

    videoEl.pause();
    videoEl.controls = false;
  }

  function onPlay(videoEl) {
    console.log('onPlay');
    videoEl.classList.add('playing');
  }

  function onStop(videoEl) {
    videoEl.classList.remove('playing');
    videoEl.controls = false;
  }

  var customizedFunction = function customizedFunction(info, eventName) {
    // direct access to info object
    console.log(info.event.type, info.container);
    var playingVideos = document.querySelectorAll('.slider__media--video-bg video.playing');

    if (playingVideos.length > 0) {
      for (var video of playingVideos) {
        pauseVideo(video);
      }
    }
  }; // bind function to event



  if (document.querySelector('.slider--main')) {

    var sliderMain = tns({
      container: '.slider--main',
      items: 1,
      slideBy: 1,
      mouseDrag: true,
      controls: true,
      nav: false,
      loop: false,
      preventScrollOnTouch: 'force'
    });

    sliderMain.events.on('transitionStart', customizedFunction);

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
