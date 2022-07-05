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
  let createdDonutMaker = new DonutMaker(0, 0, 0);

  function refreshStats() {
    document.getElementById('donut-count').innerHTML = "Donut count: " + createdDonutMaker.numOfDonuts;
    document.getElementById('clicker-count').innerHTML = "Clicker count: " + createdDonutMaker.numOfAutoClickers;
    document.getElementById('multiplier-count').innerHTML = "Multiplier count: " + createdDonutMaker.numOfMultipliers;
    document.getElementById('click-value').innerHTML = "Click value: " + createdDonutMaker.getClickValue() + " donut(s)";
    document.getElementById('clicker-price').innerHTML = "Clicker price: " + createdDonutMaker.getClickerPrice() + " donuts";
    document.getElementById('multiplier-price').innerHTML = "Multiplier price: " + createdDonutMaker.getMultiplierPrice() + " donuts";
  }

  refreshStats();

  let makeDonutButton = document.getElementById('make-donut');
  let buyClickerButton = document.getElementById('buy-clicker');
  let buyMultiplierButton = document.getElementById('buy-multiplier');
  let resetButton = document.getElementById('reset');

  makeDonutButton.addEventListener('click', () => {
    createdDonutMaker.addDonut();

    refreshStats();
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
    } else {
      createdDonutMaker.activateAutoClicker();
      setInterval(() => {
        document.getElementById('donut-count').innerHTML = "Donut count: " + createdDonutMaker.numOfDonuts;
      }, 1000);
    }

    refreshStats();
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

    refreshStats();
  });

  resetButton.addEventListener('click', () => {
    createdDonutMaker = new DonutMaker(0, 0, 0);

    refreshStats();
  });
}