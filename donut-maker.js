class DonutMaker {

  constructor(numOfDonuts, numOfAutoClickers, numOfMultipliers) {
    this.numOfDonuts = numOfDonuts;
    this.numOfAutoClickers = numOfAutoClickers;
    this.numOfMultipliers = numOfMultipliers;
  }

  addDonut() {
    multiplierValue = 1.2 ** this.numOfMultipliers;

    if (this.numOfMultipliers > 0) {
      this.numOfDonuts += multiplierValue;
    } else {
      this.numOfDonuts += 1;
    }
    
  }

  buyAutoClicker() {
    if (this.numOfAutoClickers >= 1) {
      autoClickerPrice = 1.1 ** this.numOfAutoClickers; 
      autoClickerPrice /= Math.pow(10, -2);
    }

    autoClickerPrice = Math.round(autoClickerPrice);

    if (autoClickerPrice <= this.numOfDonuts) {
      this.numOfDonuts -= autoClickerPrice;
      this.numOfAutoClickers += 1;
    }
  }

  buyDonutMultiplier() {
    if (this.numOfMultipliers >= 1) {
      multiplierPrice = 1.1 ** this.numOfMultipliers;
      multiplierPrice /= Math.pow(10, -1);
    }

    multiplierPrice = Math.round(multiplierPrice);

    if (multiplierPrice <= this.numOfDonuts) {
      this.numOfDonuts -= multiplierPrice;
      this.numOfMultipliers += 1;
    }
  }

  activateAutoClicker() {
    setInterval(() => {
      this.numOfDonuts += multiplierValue;
    }, 1000);
  }

  getClickValue() {
    return 1.2 ** this.numOfMultipliers;
  }

  getClickerPrice() {
    if (this.numOfAutoClickers == 0) {
      return 100;
    } else {
      let price = 1.1 ** this.numOfAutoClickers;
      price /= Math.pow(10, -2);
      return price;
    }
  }

  getMultiplierPrice() {
    if (this.numOfMultipliers == 0) {
      return 10;
    } else {
      let price = 1.1 ** this.numOfMultipliers;
      price /= Math.pow(10, -1);
      return Math.round(price);
    }
  }

}

let autoClickerPrice = 100;
let multiplierPrice = 10;
let multiplierValue = 1;

export default DonutMaker;