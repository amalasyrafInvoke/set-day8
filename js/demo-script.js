var score = 0;

const count = (num) => {
  score += num;
  if (score < 0) {
    score = 0;
  }

  document.querySelector('h1').innerHTML = score;

  if (score > 10 && score <= 20) {
    document.querySelector('#container').style.backgroundColor = 'silver';
  } else if (score > 20) {
    document.querySelector('#container').style.backgroundColor = 'gold';
  } else {
    document.querySelector('#container').style.backgroundColor = '#406343';
  }
};

const changeBG = (color) => {
  document.querySelector('#container').style.backgroundColor = color;
};

function defaultOnClick () {
  document.querySelector('#container').style.backgroundColor = '#406343';
  document.querySelector('#blue-btn').style.backgroundColor = '#ECE7B4';
  document.querySelector('#red-btn').style.backgroundColor = '#ECE7B4';
  document.querySelector('#green-btn').style.backgroundColor = '#ECE7B4';
}

document.getElementById('blue-btn').addEventListener('mouseover', overBtn)
document.getElementById('red-btn').addEventListener('mouseover', overBtn)
document.getElementById('green-btn').addEventListener('mouseover', overBtn)

function overBtn(event) {
  this.style.backgroundColor = "gray";
}

document.getElementById('blue-btn').addEventListener('mouseout', outBtn)
document.getElementById('red-btn').addEventListener('mouseout', outBtn)
document.getElementById('green-btn').addEventListener('mouseout', outBtn)

function outBtn(event) {
  this.style.backgroundColor = "white";
}

document.getElementById('blue-btn').addEventListener('mousedown', downBtn)
document.getElementById('red-btn').addEventListener('mousedown', downBtn)
document.getElementById('green-btn').addEventListener('mousedown', downBtn)

function downBtn(event) {
  this.style.backgroundColor = "pink";
}
