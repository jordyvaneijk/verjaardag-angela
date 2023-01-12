const balloonContainer = document.getElementById("balloon-container");
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
    balloonContainer.remove()
  }, 500)
}

const steps = new Array(mainContainer,step1Container,step2Container,step3Container,step4Container,step5Container,step6Container,step7Container);


let currentStep = 0;
function next(){
    steps[currentStep].style.display = "none";
    steps[currentStep+1].style.display = "block";
    currentStep++;
    if(currentStep > steps.length){
        currentStep=0;
        steps[0].style.display = "block";
    }
}

function step1(){
    mainContainer.style.display = "none";
    step1Container.style.display = "block";
}

function step2(){
    step1Container.style.display = "none";
    step2Container.style.display = "block";
}

function step3(){
    step2Container.style.display = "none";
    step3Container.style.display = "block";
}

function step4(){
    step3Container.style.display = "none";
    step4Container.style.display = "block";
}

// window.addEventListener("load", () => {
//   createBalloons(30)
// });

// window.addEventListener("click", () => {
//   removeBalloons();
// });
