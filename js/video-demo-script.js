var video = document.querySelector('#vid');
var vol = 1;
var isPlaying = false;

function playVid() {
  console.log(video);
  video.play();
}
function pauseVid() {
  console.log(video);
  video.pause();
}

function minVol() {
  if (vol <= 0) {
    vol = 0;
  }
  vol -= 0.1;

  video.volume = vol;
}
function maxVol() {
  if (vol >= 1) {
    vol = 1;
  }
  vol += 0.1;
  video.volume = vol;
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

function switchPlay() {
  console.log(video);
  if (isPlaying === false) {
    video.play();
    isPlaying = true;
    document.querySelector('#switch-btn').innerHTML = "<i class='fa fa-pause'></i>"
    return
  }
  if (isPlaying === true) {
    video.pause();
    isPlaying = false;
    document.querySelector('#switch-btn').innerHTML = "<i class='fa fa-play'></i>"
    return
  }
}

function switchVid(src) {
  video.src = `./${src}`;
}
