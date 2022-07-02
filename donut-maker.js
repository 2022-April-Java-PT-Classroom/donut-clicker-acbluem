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
    let autoClickerPrice;
    if (this.numOfDonuts >= 100 && this.numOfAutoClickers == 0) {
      this.numOfDonuts -= 100;
      this.numOfAutoClickers += 1;
      autoClickerPrice *= 1.01;
    } else {
      if (this.numOfDonuts < autoClickerPrice) {
        console.log('Not enough!');
      } else {
        this.numOfDonuts -= autoClickerPrice;
        autoClickerPrice *= 1.01;
      }
    }
  }

}

export default DonutMaker;