const ready = require('../../js/utils/documentReady.js');
const closest = require('closest');

//!!! В src iframe добавить ?enablejsapi=1" !!!

ready(function() {

  if (document.querySelector('.video-yt')) {

    var ytApiInserted = false;
    var firstVideoClicked = null;
    var players = [];


    function btnGoClick(index) {
      var f = function(event) {
        console.log('btnGoClick function');
        if (!ytApiInserted) {
          console.log('!ytApiInserted');
          var tag = document.createElement('script');
          tag.id = 'iframe-demo';
          tag.src = 'https://www.youtube.com/iframe_api';
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          ytApiInserted = true;
          var video = event.target.closest('.video-yt');
          firstVideoIndexClicked = video;
          console.log('firstVideoIndexClicked = ');
          console.log(firstVideoIndexClicked);
        } else {
          console.log('ytApiInserted');
          var videoContainer = event.target.closest('.video-yt').querySelector('.video-yt__frame');
          var videoPoster = event.target.closest('.video-yt').querySelector('.video-yt__poster');
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
      }
      return f;
    }

    var ytVideos = document.querySelectorAll('.video-yt');
    for (let i = 0; i < ytVideos.length; i++) {
      console.log(ytVideos[i]);
      var btn = ytVideos[i].querySelector('.btn-play');
      var frame = ytVideos[i].querySelector('.video-yt__frame');
      if (frame && btn) {
        frame.dataset.index = i;
        btn.addEventListener('click', btnGoClick(i));
      }
      if (frame) {
        frame.addEventListener('custom-stop-video', function(event) {
          if (players && players[this.dataset.index]) {
            players[this.dataset.index].stopVideo();
          }
        })
      }
    }

    window.onPlayerReady = function(event) {
      console.log('onPlayerReady');
      console.log(event.target);
      if (!firstVideoIndexClicked) {
        return;
      }
      var frame = firstVideoIndexClicked.querySelector('.video-yt__frame');
      if (frame && frame.dataset.index == event.target.g.dataset.index) {
        console.log('go');
        var btn = firstVideoIndexClicked.querySelector('.btn-play');
        if (btn) {
          btn.click();
        }
        firstVideoIndexClicked = null;
      }
      // var videoYt = event.target.h.parentNode;
      // var videoContainer = videoYt.querySelector('.video-yt__frame');
      // var index = videoContainer.dataset.index;
      // var btnGo = videoYt.querySelector('.btn-play');
      // console.log(btnGo);
      // btnGo.classList.add('!opacity-100');
      // btnGo.addEventListener('click', btnGoClick(index));
    }

    window.onPlayerStateChange = function(event) {
      console.log('onPlayerStateChange');
      console.log(event.target);
      var videoYt = event.target.g.closest('.video-yt');
      var videoContainer = videoYt.querySelector('.video-yt__frame');
      var videoPoster = videoYt.querySelector('.video-yt__poster');
      var index = videoContainer.dataset.index;
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
      console.log('onYouTubeIframeAPIReady');

      var videos = document.querySelectorAll('.video-yt__frame');

      for (var i = 0; i < videos.length; i++) {
        var playerOptions = {
          events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
          },
        };
        players[i] = new YT.Player(videos[i], playerOptions);
      }
      console.log(players);
    }

  }

});
