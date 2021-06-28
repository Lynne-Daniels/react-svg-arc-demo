import { convertUnitsToDegrees } from './calculations.js'

test('converts 1st  to angle', () => {
  expect(convertUnitsToDegrees(0, 0, 10) % 360).toEqual(240);
});

test('converts middle value to angle', () => {
  expect(convertUnitsToDegrees(5, 0, 10) % 360).toEqual(0);

});

test('converts last value to angle', () => {
  expect(convertUnitsToDegrees(10, 0, 10) % 360).toEqual(120);
});