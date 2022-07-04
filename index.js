import DonutMaker from "./donut-maker.js";

renderPage();

function renderPage() {
  createDonutMaker();
}

function createDonutMaker() {
  const createdDonutMaker = new DonutMaker(0, 0, 0);

  document.getElementById('donut-count').innerHTML = "Donut count: " + createdDonutMaker.numOfDonuts;
  document.getElementById('clicker-count').innerHTML = "Clicker count: " + createdDonutMaker.numOfAutoClickers;
  document.getElementById('multiplier-count').innerHTML = "Multiplier count: " + createdDonutMaker.numOfMultipliers;
}