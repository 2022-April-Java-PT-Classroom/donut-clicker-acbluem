class DonutMaker {

  constructor(numOfDonuts, numOfAutoClickers, numOfMultipliers) {
    this.numOfDonuts = numOfDonuts;
    this.numOfAutoClickers = numOfAutoClickers;
    this.numOfMultipliers = numOfMultipliers;
  }

  addDonut() {
    this.calculateMultiplierValue();

    this.numOfDonuts += multiplierValue;    
  }

  buyAutoClicker() {
    autoClickerPrice = this.calculateClickerPrice();

    if (autoClickerPrice <= this.numOfDonuts) {
      this.numOfDonuts -= autoClickerPrice;
      this.numOfAutoClickers += 1;
    }
  }

  buyDonutMultiplier() {
    multiplierPrice = this.calculateMultiplierPrice();

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
    return Math.round(autoClickerPrice);
  }

  calculateMultiplierPrice() {
    multiplierPrice = 1.1 ** this.numOfMultipliers;
    multiplierPrice /= Math.pow(10, -1);
    return Math.round(multiplierPrice);
  }

  getClickValue() {
    return this.calculateMultiplierValue();
  }

  getClickerPrice() {
    return this.calculateClickerPrice();
  }

  getMultiplierPrice() {
    return this.calculateMultiplierPrice();
  }

}

let autoClickerPrice = 100;
let multiplierPrice = 10;
let multiplierValue = 1;

export default DonutMaker;