class DonutMaker {

  constructor(numOfDonuts, numOfAutoClickers, numOfMultipliers) {
    this.numOfDonuts = numOfDonuts;
    this.numOfAutoClickers = numOfAutoClickers;
    this.numOfMultipliers = numOfMultipliers;
  }

  addDonut() {
    this.numOfDonuts += 1;
  }

  buyAutoClicker() {
    if (this.numOfAutoClickers >= 1) {
      for (let i = 0; i > this.numOfAutoClickers; i++); {
        autoClickerPrice *= 1.1;
        autoClickerPrice = Math.round(autoClickerPrice);
      }
    }

    if (autoClickerPrice <= this.numOfDonuts) {
      this.numOfDonuts -= autoClickerPrice;
      this.numOfAutoClickers += 1;
    }
  }

  buyDonutMultiplier() {
    if (this.numOfMultipliers >= 1) {
      for (let i = 0; i > this.numOfMultipliers; i++); {
        multiplierPrice *= 1.1;
        multiplierPrice = Math.round(multiplierPrice);
      }
    }

    if (multiplierPrice <= this.numOfDonuts) {
      this.numOfDonuts -= multiplierPrice;
      this.numOfMultipliers += 1;
    }
  }

  activateAutoClicker() {
    setInterval(() => {
      this.numOfDonuts += 1}
      , 1000);
  }


}

let autoClickerPrice = 100;
let multiplierPrice = 10;

export default DonutMaker;