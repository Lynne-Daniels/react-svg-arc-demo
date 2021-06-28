import { DEGREES_IN_HALF_ARC } from './data.js'

/**         degrees                   amps
 *            0, 360                    5
 *              |                       |
 *              |                       |
 *             / \                     / \
 *            /   \                   /   \
 *       min 240  120 max           0       10
 * 
 *  DEGREES_IN_HALF_ARC = 360 - 240 = 120
 *  degrees = amp * 24 + 240 (svg-arc takes modulo if over 360)
 */

export const convertUnitsToDegrees = function (units, minUnits, maxUnits) {
  const displayedUnits = (units < minUnits) ? minUnits : units > maxUnits ? maxUnits : units
  
  const degToUnitRatio = DEGREES_IN_HALF_ARC * 2 / Math.abs(maxUnits - minUnits)
  return (displayedUnits * degToUnitRatio) + 360 - DEGREES_IN_HALF_ARC
}
