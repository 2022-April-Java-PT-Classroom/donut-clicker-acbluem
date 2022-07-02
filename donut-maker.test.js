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
  })
});