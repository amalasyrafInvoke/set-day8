var video = document.querySelector('#vid');
var vol = 1;
var isPlaying = false;
var vidListToggle = false;
var currentVid = 'blackpink';
var vidArray = [
  { name: 'BBB Video', img: 'vids-thumbnail1.png', vid: 'mov_bbb.mp4' },
  { name: 'Blackpink', img: 'vids-thumbnail3.png', vid: 'blackpink.mp4' },
  { name: 'Bear Video', img: 'vids-thumbnail2.png', vid: 'movie.mp4' },
];

function switchPlay() {
  if (isPlaying === false) {
    video.play();
    isPlaying = true;
    document.querySelector('#switch-btn').innerHTML =
      "<i class='fa fa-pause'></i>";
    return;
  }
  if (isPlaying === true) {
    video.pause();
    isPlaying = false;
    document.querySelector('#switch-btn').innerHTML =
      "<i class='fa fa-play'></i>";
    return;
  }
}

function updateVol(value) {
  if (vol + value <= 0) {
    vol = 0;
  } else if (vol + value >= 1) {
    vol = 1;
  } else {
    vol += value;
  }

  video.volume = vol;
}

function toggleList() {
  if (vidListToggle === true) {
    document.querySelector('#video-list').style.display = 'none';
    vidListToggle = false;
    return;
  }
  if (vidListToggle === false) {
    document.querySelector('#video-list').style.display = 'flex';
    vidListToggle = true;

    if (isPlaying === true) {
      video.pause();
      isPlaying = false;
      document.querySelector('#switch-btn').innerHTML =
        "<i class='fa fa-play'></i>";
    }
    return;
  }
}

function switchVid(src, vidNumber) {
  video.src = `./${src}`;
  document.querySelector('#video-title').innerHTML = vidArray[vidNumber].name;
  document.querySelector('#video-list').style.display = 'none';
  vidListToggle = false;
  setTimeout(() => {
    video.play();
    isPlaying = true;
    document.querySelector('#switch-btn').innerHTML =
      "<i class='fa fa-pause'></i>";
  }, 500);
}

function navOnClick(type) {
  if (type === 'top') {
    document.querySelector('#vid').classList.add('animateTop');
    setTimeout(
      () => document.querySelector('#vid').classList.remove('animateTop'),
      2500
    );
    if (currentVid === 'blackpink') {
      video.src = `./${vidArray[0].vid}`;
      currentVid = 'bbb';
      document.querySelector('#up-next-video').style.background =
        'url(./images/vids-thumbnail3.png)';
      setTimeout(() => {
        video.play();
        isPlaying = true;
        document.querySelector('#switch-btn').innerHTML =
          "<i class='fa fa-pause'></i>";
      }, 3000);
      return;
    }
    if (currentVid === 'bbb') {
      video.src = `./${vidArray[1].vid}`;
      currentVid = 'blackpink';
      document.querySelector('#up-next-video').style.background =
        'url(./images/vids-thumbnail3.png)';
      setTimeout(() => {
        video.play();
        isPlaying = true;
        document.querySelector('#switch-btn').innerHTML =
          "<i class='fa fa-pause'></i>";
      }, 3000);
      return;
    }
    if (currentVid === 'bear') {
      video.src = `./${vidArray[0].vid}`;
      currentVid = 'bbb';
      document.querySelector('#up-next-video').style.background =
        'url(./images/vids-thumbnail1.png)';
      setTimeout(() => {
        video.play();
        isPlaying = true;
        document.querySelector('#switch-btn').innerHTML =
          "<i class='fa fa-pause'></i>";
      }, 3000);
      return;
    }
  }

  if (type === 'bottom') {
    document.querySelector('#vid').classList.add('animateBottom');
    setTimeout(
      () => document.querySelector('#vid').classList.remove('animateBottom'),
      2500
    );
    if (currentVid === 'blackpink') {
      video.src = `./${vidArray[2].vid}`;
      currentVid = 'bear';
      document.querySelector('#previous-video').style.background =
        'url(./images/vids-thumbnail3.png)';
      setTimeout(() => {
        video.play();
        isPlaying = true;
        document.querySelector('#switch-btn').innerHTML =
          "<i class='fa fa-pause'></i>";
      }, 3000);
      return;
    }
    if (currentVid === 'bbb') {
      video.src = `./${vidArray[2].vid}`;
      currentVid = 'bear';
      document.querySelector('#previous-video').style.background =
        'url(./images/vids-thumbnail2.png)';
      setTimeout(() => {
        video.play();
        isPlaying = true;
        document.querySelector('#switch-btn').innerHTML =
          "<i class='fa fa-pause'></i>";
      }, 3000);
      return;
    }
    if (currentVid === 'bear') {
      video.src = `./${vidArray[1].vid}`;
      currentVid = 'blackpink';
      document.querySelector('#previous-video').style.background =
        'url(./images/vids-thumbnail3.png)';
      setTimeout(() => {
        video.play();
        isPlaying = true;
        document.querySelector('#switch-btn').innerHTML =
          "<i class='fa fa-pause'></i>";
      }, 3000);
      return;
    }
  }
}
