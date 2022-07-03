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
});