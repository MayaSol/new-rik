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

    var players = [];

    function btnGoClick(index) {
      var f = function(event) {
        var videoContainer = this.closest('.video-yt').querySelector('.video-yt__frame');
        var videoPoster = this.closest('.video-yt').querySelector('.video-yt__poster');
        if (players[index].getPlayerState() == YT.PlayerState.PLAYING) {
          players[index].stopVideo();
          videoPoster.classList.remove('video-yt__poster--hidden');
          videoContainer.classList.add('video-hidden');
        } else {
          videoContainer.classList.remove('video-hidden');
          videoPoster.classList.add('video-yt__poster--hidden');
          players[index].playVideo();
        }
      }
      return f;
    }

    window.onPlayerReady = function(event) {
      var videoYt = event.target.h.parentNode;
      var videoContainer = videoYt.querySelector('.video-yt__frame');
      var index = videoContainer.dataset.index;
      var btnGo = videoYt.querySelector('.btn-play');
      console.log(btnGo);
      btnGo.classList.add('!opacity-100');
      btnGo.addEventListener('click', btnGoClick(index));
    }

    window.onPlayerStateChange = function(event) {
        var videoYt = event.target.h.closest('.video-yt');
        var videoContainer = videoYt.querySelector('.video-yt__frame');
        var videoPoster = videoYt.querySelector('.video-yt__poster');
        var index=videoContainer.dataset.index;
      if (event.data == YT.PlayerState.ENDED) {
        players[index].stopVideo();
        videoPoster.classList.remove('video-yt__poster--hidden');
        videoContainer.classList.add('video-hidden');
      } else if (event.data == YT.PlayerState.PLAYING || event.data == YT.PlayerState.BUFFERING) {
        videoContainer.classList.remove('video-hidden');
        videoPoster.classList.add('video-yt__poster--hidden');
        players[index].playVideo();
      }
    }

    window.onYouTubeIframeAPIReady = function() {

      var videos = document.querySelectorAll('.video-yt__frame');

      for (var i = 0; i < videos.length; i++) {
        videos[i].dataset.index = i;
        players[i] = new YT.Player(videos[i], {
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          }
        });

      }

    }
  }

});
