var jukebox = document.querySelector('ul.music-player');
jukebox.addEventListener('click', function (e) {
  var songName = e.target.getAttribute('data-src');
  var audioPlayer = document.querySelector('#music-player');
  if (audioPlayer) {
    if (songName === audioPlayer.getAttribute('src')) {
      if (audioPlayer.paused) {
        audioPlayer.play();
        e.target.id = 'playing';
      } else {
        audioPlayer.pause();
        e.target.id = 'paused';
      }
    } else {
      audioPlayer.src = songName;
      audioPlayer.play();
      if (document.querySelector('#playing')) {
        document.querySelector('#playing').id = '';
      } else {
        document.querySelector('#paused').id = '';
      }
      e.target.id = 'playing';
    }
  } else {
    var audioPlayer = document.createElement('audio');
    audioPlayer.id = 'music-player';
    e.target.id = 'playing';
    audioPlayer.src = songName;
    document.body.appendChild(audioPlayer);
    audioPlayer.play();
    audioPlayer.addEventListener('ended', function () {
      audioPlayer.parentNode.removeChild(audioPlayer);
      e.target.id = '';
    }, false);
  }
}, false);
