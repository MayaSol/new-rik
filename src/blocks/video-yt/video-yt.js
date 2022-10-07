const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');

//!!! В src iframe добавить ?enablejsapi=1" !!!

ready(function() {


  if (document.querySelector('.reviews')) {


    var tag = document.createElement('script');
    tag.id = 'iframe-demo';
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;

    window.onPlayerReady = function(event) {

      console.log('onPlayerReady');

      function btnGoClick(event) {

        console.log('btnGoClick');
        var videoContainer = this.closest('.video-yt').querySelector('.video-yt__frame');
        var videoPoster = this.closest('.video-yt').querySelector('.video-yt__poster');
        console.log('videoContainer');
        console.log(videoContainer);
        if (player.getPlayerState() == YT.PlayerState.PLAYING) {
          console.log('1');
          player.stopVideo();
          videoPoster.classList.remove('video-yt__poster--hidden');
          videoContainer.classList.add('video-hidden');
        } else {
          console.log('2');
          videoContainer.classList.remove('video-hidden');
          videoPoster.classList.add('video-yt__poster--hidden');
          console.log(player);
          player.playVideo();
        }
      }

      var btnsGo = document.querySelectorAll('.video-yt .btn-play');
      console.log('btnsGo:');
      console.log(btnsGo);
      for (btn of btnsGo) {
        btn.addEventListener('click', btnGoClick);
      }
    }


    window.onPlayerStateChange = function(event) {
      console.log('onPlayerStateChange');
      console.log(event);
    }


    window.onYouTubeIframeAPIReady = function() {

      player = new YT.Player('video-yt__frame', {
        events: {
          'onReady': onPlayerReady,
          'onStateChange': onPlayerStateChange
        }
      });
    }
  }

});
