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

  let makeDonutButton = document.getElementById('make-donut');
  let buyClickerButton = document.getElementById('buy-clicker');
  let buyMultiplierButton = document.getElementById('buy-multiplier');

  makeDonutButton.addEventListener('click', () => {
    createdDonutMaker.addDonut();
    document.getElementById('donut-count').innerHTML = "Donut count: " + createdDonutMaker.numOfDonuts;
  });

  buyClickerButton.addEventListener('click', () => {
    let oldClickerValue = createdDonutMaker.numOfAutoClickers;
    createdDonutMaker.buyAutoClicker();
    let newClickerValue = createdDonutMaker.numOfAutoClickers;

    if (oldClickerValue == newClickerValue) {
      buyClickerButton.innerText = 'Not Enough Donuts!';

      setTimeout(() => {
        buyClickerButton.innerText = 'Buy Auto Clicker';
      }, 2000);
    }

    document.getElementById('donut-count').innerHTML = "Donut count: " + createdDonutMaker.numOfDonuts;
    document.getElementById('clicker-count').innerHTML = "Clicker count: " + createdDonutMaker.numOfAutoClickers;
  });

  buyMultiplierButton.addEventListener('click', () => {
    let oldMultiplierValue = createdDonutMaker.numOfMultipliers;
    createdDonutMaker.buyDonutMultiplier();
    let newMultiplierValue = createdDonutMaker.numOfMultipliers;

    if (oldMultiplierValue == newMultiplierValue) {
      buyMultiplierButton.innerText = 'Not Enough Donuts!';
      
      setTimeout(() => {
        buyMultiplierButton.innerText = 'Buy Donut Multiplier';
      }, 2000);
    }

    document.getElementById('donut-count').innerHTML = "Donut count: " + createdDonutMaker.numOfDonuts;
    document.getElementById('multiplier-count').innerHTML = "Multiplier count: " + createdDonutMaker.numOfMultipliers;
  });
}