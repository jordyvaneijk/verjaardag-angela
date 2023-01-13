const balloonContainer = document.getElementById("balloon-container");

const audioPlayer = document.getElementById("audioplayer");
const videoPlayer = document.getElementById("videoplayer");

const mainContainer = document.getElementById("main");
const step1Container = document.getElementById("step1");
const step2Container = document.getElementById("step2");
const step3Container = document.getElementById("step3");
const step4Container = document.getElementById("step4");
const step5Container = document.getElementById("step5");
const step6Container = document.getElementById("step6");
const step7Container = document.getElementById("step7");

function random(num) {
  return Math.floor(Math.random() * num);
}

function getRandomStyles() {
  var r = random(255);
  var g = random(255);
  var b = random(255);
  var mt = random(200);
  var ml = random(50);
  var dur = random(5) + 5;
  return `
  background-color: rgba(${r},${g},${b},0.7);
  color: rgba(${r},${g},${b},0.7); 
  box-shadow: inset -7px -3px 10px rgba(${r - 10},${g - 10},${b - 10},0.7);
  margin: ${mt}px 0 0 ${ml}px;
  animation: float ${dur}s ease-in infinite
  `;
}

function createBalloons(num) {
  for (var i = num; i > 0; i--) {
    var balloon = document.createElement("div");
    balloon.className = "balloon";
    balloon.style.cssText = getRandomStyles();
    balloonContainer.append(balloon);
  }
}

function removeBalloons() {
  balloonContainer.style.opacity = 0;
  setTimeout(() => {
    balloonContainer.remove();
  }, 500);
}

const steps = new Array(
  mainContainer,
  step1Container,
  step2Container,
  step3Container,
  step4Container,
  step5Container,
  step6Container, //video
  step7Container
);

let currentStep = 0;

function next() {
  steps[currentStep].style.display = "none";
  currentStep++;
  steps[currentStep].style.display = "block";
  switch (currentStep) {
    case 6:
      pauseHappyBirthday();
      playNewYork();
      break;

    case 7:
      stopNewYork();
      playHappyBirthday();
      break;

    default:
      break;
  }
}

function end() {
  steps.forEach((element) => {
    element.style.display = "none";
  });
  currentStep = 0;
  steps[0].style.display = "block";
}

function playNewYork() {
  videoPlayer.muted = false;
  videoPlayer.play();
}

function stopNewYork() {
  videoPlayer.pause();
}

function playHappyBirthday() {
  audioPlayer.muted = false;
  //videoPlayer.load();
  audioPlayer.play();
}

function pauseHappyBirthday() {
  audioPlayer.pause();
}
window.addEventListener("load", () => {
  audioPlayer.style.display = "none";
});

window.addEventListener("click", () => {
  playHappyBirthday();
});
