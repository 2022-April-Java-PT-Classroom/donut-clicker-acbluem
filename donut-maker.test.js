import DonutMaker from "./donut-maker";

describe('DonutMaker object', () => {

  test('Does donutMaker add one to donut count', () => {
    const underTest = new DonutMaker(0, 0, 0);
    underTest.addDonut();
    expect(underTest.numOfDonuts).toEqual(1);
  });

  test('Does donutMaker retrieve donut count', () => {
    const underTest = new DonutMaker(0, 0, 0);
    expect(underTest.numOfDonuts).toEqual(0);
  });

  test('Does donutMaker retrieve auto clicker count', () => {
    const underTest = new DonutMaker(0, 0, 0);
    expect(underTest.numOfAutoClickers).toEqual(0);
  });

  test('Does donutMaker add to auto clicker count', () => {
    const underTest = new DonutMaker(100, 0, 0);
    underTest.buyAutoClicker();
    expect(underTest.numOfAutoClickers).toEqual(1);
  });

  test('Does donutMaker subtract from donut count', () => {
    const underTest = new DonutMaker(100, 0, 0);
    underTest.buyAutoClicker();
    expect(underTest.numOfDonuts).toEqual(0);
  });

  test('Does cost of second auto clicker increase by 10 percent', () => {
    const underTest = new DonutMaker(210, 0, 0);
    underTest.buyAutoClicker();
    underTest.buyAutoClicker();
    expect(underTest.numOfDonuts).toEqual(0);
  });

  test('Does cost of third auto clicker increase by 10 percent from second clicker price', () => {
    const underTest = new DonutMaker(121, 2, 0);
    underTest.buyAutoClicker();
    expect(underTest.numOfDonuts).toEqual(0);
  });

  test('Does not increase auto clicker count with insufficient donuts', () => {
    const underTest = new DonutMaker(100, 2, 0);
    underTest.buyAutoClicker();
    expect(underTest.numOfAutoClickers).toEqual(2);
  });

  test('Adds donuts via an activated auto clicker', () => {
    const underTest = new DonutMaker(0, 1, 0);

    jest.useFakeTimers();

    underTest.activateAutoClicker();

    jest.advanceTimersByTime(1000);

    expect(underTest.numOfDonuts).toEqual(1);
  });

  test('Retrieves donut multiplier count', () => {
    const underTest = new DonutMaker(0, 0, 7);
    expect(underTest.numOfMultipliers).toEqual(7);
  });

  test('Adds to multiplier count after purchase', () => {
    const underTest = new DonutMaker(10, 0, 0);
    underTest.buyDonutMultiplier();
    expect(underTest.numOfMultipliers).toEqual(1);
  });

  test('Subtracts donuts after multiplier purchase', () => {
    const underTest = new DonutMaker(10, 0, 0);
    underTest.buyDonutMultiplier();
    expect(underTest.numOfDonuts).toEqual(0);
  });

  test('Increases cost of multiplier on second purchase', () => {
    const underTest = new DonutMaker(21, 0, 0);
    underTest.buyDonutMultiplier();
    underTest.buyDonutMultiplier();
    expect(underTest.numOfDonuts).toEqual(0);
  });

  test('Increases cost of multiplier further on third purchase', () => {
    const underTest = new DonutMaker(12, 0, 2);
    underTest.buyDonutMultiplier();
    expect(underTest.numOfDonuts).toBeLessThan(13);
  });

  test('Donuts does not subtract when there are insufficient funds for multiplier', () => {
    const underTest = new DonutMaker(11, 0, 2);
    underTest.buyDonutMultiplier();
    expect(underTest.numOfMultipliers).toEqual(2);
  });

  test('Donut multiplier takes effect in addDonut with one multiplier', () => {
    const underTest = new DonutMaker(0, 0, 1);
    underTest.addDonut();
    expect(underTest.numOfDonuts).toEqual(1.2);
  });

  test('Donut multiplier takes effect in addDonut with four multipliers', () => {
    const underTest = new DonutMaker(0, 0, 4);
    underTest.addDonut();
    expect(underTest.numOfDonuts).toEqual(2.0736);
  });

  test('Adds multiplier donuts via an activated auto clicker', () => {
    const underTest = new DonutMaker(0, 1, 1);

    jest.useFakeTimers();

    underTest.addDonut();

    underTest.activateAutoClicker();

    jest.advanceTimersByTime(1000);

    expect(underTest.numOfDonuts).toEqual(2.4);
  });
});