class DonutMaker {

  constructor(numOfDonuts, numOfAutoClickers, numOfMultipliers) {
    this.numOfDonuts = numOfDonuts;
    this.numOfAutoClickers = numOfAutoClickers;
    this.numOfMultipliers = numOfMultipliers;
  }

  addDonut() {
    this.getClickValue();

    this.numOfDonuts += multiplierValue;    
  }

  buyAutoClicker() {
    autoClickerPrice = this.getClickerPrice();

    if (autoClickerPrice <= this.numOfDonuts) {
      this.numOfDonuts -= autoClickerPrice;
      this.numOfAutoClickers += 1;
    }
  }

  buyDonutMultiplier() {
    multiplierPrice = this.getMultiplierPrice();

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
    multiplierValue = 1.2 ** this.numOfMultipliers;

    return multiplierValue;
  }

  getClickerPrice() {
    autoClickerPrice = 1.1 ** this.numOfAutoClickers; 
    autoClickerPrice /= Math.pow(10, -2);

    return Math.round(autoClickerPrice);
  }

  getMultiplierPrice() {
    multiplierPrice = 1.1 ** this.numOfMultipliers;
    multiplierPrice /= Math.pow(10, -1);
    
    return Math.round(multiplierPrice);
  }

}

let autoClickerPrice = 100;
let multiplierPrice = 10;
let multiplierValue = 1;

export default DonutMaker;