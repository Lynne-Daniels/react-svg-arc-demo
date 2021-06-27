import React from 'react'
import {
  convertCartesianToSVGian,
  convertDegToRadians,
  getX,
  getY,
} from './calculations.js'

class History extends React.Component {

  
// input start angle degrees, end angle degrees, radius, viewBoxParams

// output svg path d = "M startX startY" A radius radius, 0 largeArcFlag, sweepFlag, endX, endY
  
  makeArc(startAngle, endAngle, radius, viewBox = "-110 -110 220 220", rotation = 0, largeArcFlag = 0, sweepFlag = 0) {
    // console.log('viewBox in makeArc', viewBox)
    // TODO test many combos to figure out when flags change
    // let largeArcFlag = 0
    // let sweepFlag = 1 // TODO FIX THIS for changes in angle diff - can pass over 0
     
    const startAngleRadians = convertDegToRadians(startAngle)
    const endAngleRadians = convertDegToRadians(endAngle)

    // points in Cartesian
    const [startX, startY] = [getX(startAngleRadians, radius), getY(endAngleRadians, radius)]
    const [endX, endY] = [getX(endAngleRadians, radius), getY(endAngleRadians, radius)]

    // in format {x: svgX, y: svgY}
    const startPoint = convertCartesianToSVGian(startX, startY, viewBox)
    const endPoint = convertCartesianToSVGian(endX, endY, viewBox)
    console.log('X', startPoint.x, startX, startY, startAngleRadians, startAngle)
    console.log('Y', startPoint.y, startX, startY, startAngleRadians, startAngle)
    return (
      `M ${Math.round(startPoint.x)} ${Math.round(startPoint.y)} 
       A ${radius} ${radius} ${rotation} ${largeArcFlag} ${sweepFlag} ${Math.round(endPoint.x)} ${Math.round(endPoint.y)}`
       ) 
  }

  
    makeMyPath () {
      // return "M -100 0 A 100 100 0 0 1 0 -100" // top left quarter
      // return "M -70 70 A 100 100 0 1 1 70 70" // full range from 215 to 315
      return "M 70 -70 A 100 100 0 0 1 100 0" // top right section
    }
  
      render()
      {
        // console.log('props', this.props)
        const {startAngle, endAngle, radius, viewBox, largeArcFlag, sweepFlag} = this.props
        // TODO
        // if (!this.props.data || this.props.data.minValue === undefined || this.props.data.maxValue === undefined) {
        //   return null
        // }
          return (<>
    
   <path id="arc2" fill="none" stroke=" #7BCFFE" strokeWidth="5.8" d={this.makeArc(startAngle, endAngle, radius, viewBox, largeArcFlag, sweepFlag)}></path>
   <text fontSize="smaller" x="-100" y="110" fill="royalblue">{this.makeArc(startAngle, endAngle, radius, viewBox, largeArcFlag, sweepFlag)}</text>

  
        </>)
  
      } // end render
  
  } // end class History
  
  
  export default History
  
  /*
  Resources Used
  https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths
  Codepen React Example: https://codepen.io/hugovila/pen/pymXvJ
  https://css-tricks.com/svg-path-syntax-illustrated-guide/
  https://math.stackexchange.com/questions/449035/is-it-possible-to-build-a-circle-with-quadratic-b%C3%A9zier-curves (NO!)
  */