const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');

//!!! В src iframe добавить ?enablejsapi=1" !!!

ready(function() {

  if (document.querySelector('.video-yt')) {

    console.log('video-yt');

    var tag = document.createElement('script');
    tag.id = 'iframe-demo';
    tag.src = 'https://www.youtube.com/iframe_api';
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;

    function btnGoClick(event) {
      var videoContainer = this.closest('.video-yt').querySelector('.video-yt__frame');
      var videoPoster = this.closest('.video-yt').querySelector('.video-yt__poster');
      if (player.getPlayerState() == YT.PlayerState.PLAYING) {
        player.stopVideo();
        videoPoster.classList.remove('video-yt__poster--hidden');
        videoContainer.classList.add('video-hidden');
      } else {
        videoContainer.classList.remove('video-hidden');
        videoPoster.classList.add('video-yt__poster--hidden');
        player.playVideo();
      }
    }

    window.onPlayerReady = function(event) {

      var btnsGo = document.querySelectorAll('.video-yt .btn-play');
      console.log(btnsGo);
      for (btn of btnsGo) {
        btn.classList.add('!opacity-100');
        btn.addEventListener('click', btnGoClick);
      }
    }

    window.onPlayerStateChange = function(event) {
      if (event.data == YT.PlayerState.ENDED) {
        var videoYt = event.target.g.closest('.video-yt');
        var videoContainer = videoYt.getElementsByClassName('video-yt__frame')[0];
        var videoPoster = videoYt.getElementsByClassName('video-yt__poster')[0];
        player.stopVideo();
        videoPoster.classList.remove('video-yt__poster--hidden');
        videoContainer.classList.add('video-hidden');
      }
      else if (event.data == YT.PlayerState.PLAYING || event.data == YT.PlayerState.BUFFERING) {
        var videoYt = event.target.g.closest('.video-yt');
        var videoContainer = videoYt.getElementsByClassName('video-yt__frame')[0];
        var videoPoster = videoYt.getElementsByClassName('video-yt__poster')[0];
        videoContainer.classList.remove('video-hidden');
        videoPoster.classList.add('video-yt__poster--hidden');
        player.playVideo();
      }
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
