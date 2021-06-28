import { convertUnitsToDegrees } from './calculations.js'
import { DEGREES_IN_HALF_ARC } from './data.js'
 
test('converts 1st  to angle', () => {
  expect(convertUnitsToDegrees(0, 0, 10) % 360).toEqual(2 * DEGREES_IN_HALF_ARC );
});

test('converts middle value to angle', () => {
  expect(convertUnitsToDegrees(5, 0, 10) % 360).toEqual(0);

});

test('converts last value to angle', () => {
  expect(convertUnitsToDegrees(10, 0, 10) % 360).toEqual(DEGREES_IN_HALF_ARC );
});

test('does not pass minimum angle', () => {
  expect(convertUnitsToDegrees(-2, 0, 10) % 360).toEqual(240);
});

test('guage pegged at max angle', () => {
  expect(convertUnitsToDegrees(11, 0, 10) % 360).toEqual(120);
});