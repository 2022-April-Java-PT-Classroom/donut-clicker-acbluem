class DonutMaker {

  constructor(numOfDonuts, numOfAutoClickers, numOfMultipliers) {
    this.numOfDonuts = numOfDonuts;
    this.numOfAutoClickers = numOfAutoClickers;
    this.numOfMultipliers = numOfMultipliers;
  }

  addDonut() {
    this.calculateMultiplierValue();

    if (this.numOfMultipliers > 0) {
      this.numOfDonuts += multiplierValue;
    } else {
      this.numOfDonuts += 1;
    }
    
  }

  buyAutoClicker() {
    if (this.numOfAutoClickers >= 1) {
      this.calculateClickerPrice();
    }

    autoClickerPrice = Math.round(autoClickerPrice);

    if (autoClickerPrice <= this.numOfDonuts) {
      this.numOfDonuts -= autoClickerPrice;
      this.numOfAutoClickers += 1;
    }
  }

  buyDonutMultiplier() {
    if (this.numOfMultipliers >= 1) {
      this.calculateMultiplierPrice();
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

  calculateMultiplierValue() {
    multiplierValue = 1.2 ** this.numOfMultipliers;
    return multiplierValue;
  }

  calculateClickerPrice() {
    autoClickerPrice = 1.1 ** this.numOfAutoClickers; 
    autoClickerPrice /= Math.pow(10, -2);
    return autoClickerPrice;
  }

  calculateMultiplierPrice() {
    multiplierPrice = 1.1 ** this.numOfMultipliers;
    multiplierPrice /= Math.pow(10, -1);
    return multiplierPrice;
  }

  getClickValue() {
    return this.calculateMultiplierValue();
  }

  getClickerPrice() {
    if (this.numOfAutoClickers == 0) {
      return 100;
    } else {
      return Math.round(this.calculateClickerPrice());
    }
  }

  getMultiplierPrice() {
    if (this.numOfMultipliers == 0) {
      return 10;
    } else {
      return Math.round(this.calculateMultiplierPrice());
    }
  }

}

let autoClickerPrice = 100;
let multiplierPrice = 10;
let multiplierValue = 1;

export default DonutMaker;