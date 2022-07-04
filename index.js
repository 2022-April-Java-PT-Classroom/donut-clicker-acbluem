import DonutMaker from "./donut-maker.js";

renderPage();

function renderPage() {
  createDonutMaker();
  createAboutDev();  
}

function createAboutDev() {
  let modal = document.getElementById('dev-modal');
  let devButton = document.getElementById('about-dev');
  let closeX = document.getElementsByClassName('close')[0];

  devButton.onclick = function () {
    modal.style.display = 'block';
  }

  closeX.onclick = function() {
    modal.style.display = 'none';
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  }
}

function createDonutMaker() {
  const createdDonutMaker = new DonutMaker(0, 0, 0);

  document.getElementById('donut-count').innerHTML = "Donut count: " + createdDonutMaker.numOfDonuts;
  document.getElementById('clicker-count').innerHTML = "Clicker count: " + createdDonutMaker.numOfAutoClickers;
  document.getElementById('multiplier-count').innerHTML = "Multiplier count: " + createdDonutMaker.numOfMultipliers;
}