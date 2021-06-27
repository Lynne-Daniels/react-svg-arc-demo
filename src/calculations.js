export const convertDegToRadians = function (degrees) {
  return degrees * Math.PI / 180
}

export const getX = function (angleInRadians, r) {
  return (Math.round(r * Math.cos(angleInRadians) * 1000)) / 1000
}

export const getY = function (angleInRadians, r) {
  return (Math.round(r * Math.sin(angleInRadians) * 1000)) / 1000
}

// let inputs = [
//   0,
//   1.57,
//   3.14,
//   4.71
// ]

let degrees = [0, 80, 100, 135, 180]
// let degrees = [0, 45, 90, 135, 180, 225, 270, 315, 360]
let inputs = degrees.map(v => Math.round(convertDegToRadians(v) * 1000) / 1000)
let r = 100;

export const convertCartesianToSVGian = function (cartesianX, cartesianY, viewBox) {
  // console.log('vb in convertCarttosvg', viewBox)
  const [minX, minY, width, height] = viewBox.split(' ')
  if (width % 2 !== 0 || height % 2 !== 0) {
    console.log('Hey, we are going to have lopsided UI unless the viewbox has even number length sides.  Sorry')
  }
   
  const x = Math.floor(width / 2) + cartesianX + parseInt(minX, 10)
  const y = Math.floor(height / 2) - cartesianY + parseInt(minY, 10)
  
  return {x, y}
}

// export const svgPathCoords = inputs.map(v => {
//   const x = getX(v, r)
//   const y = getY(v, r)
//   return convertCartesianToSVGian(x, y, r * 2, r * 2)
// })

// for (let i = 0; i < inputs.length; i++) {
//   console.log('degrees:', degrees[i], 'radians', inputs[i],  'x:', getX(inputs[i], r), 'y:', getY(inputs[i], r), 'SVGPathCoords:', svgPathCoords[i])
// }

// TODO if paths have to be integers, things could look jerky or off a little
// Can svg be calculated at a larger size and then displayed smaller to hide the rounding changes?
// set view box and preserveAspectRatio - see https://css-tricks.com/scale-svg/

/*
degrees: 0 radians 0 x: 100 y: 0                    200, 100
degrees: 45 radians 0.785 x: 70 y: 70               170, 30
degrees: 90 radians 1.571 x: -0.02 y: 100           100, 0
degrees: 135 radians 2.356 x: -70 y: 70             30, 30
degrees: 180 radians 3.142 x: -100 y: -0            0, 100
degrees: 225 radians 3.927 x: -70 y: -70            30, 170
degrees: 270 radians 4.712 x: -0 y: -100            100, 200
degrees: 315 radians 5.498 x: 70 y: -70             170, 170
degrees: 360 radians 6.283 x: 100 y: -0             200, 100
*/


