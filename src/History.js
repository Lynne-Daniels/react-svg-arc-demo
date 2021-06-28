import arc from 'svg-arc'
import React from 'react'

class History extends React.Component {

  /**
   * @param {*} startAngle 
   * @param {*} endAngle 
   * @param {*} r 
   * @param {*} R 
   * @param {*} viewBox 
   * @returns svg path d = "M startX startY" A radius radius, 0 largeArcFlag, sweepFlag, endX, endY
   */
  
  makeArc(startAngle, endAngle, r, R, cx, cy) {

    /** returns a double arc svg d value
     * sample --  "M -82.27 47.50 L -82.27 47.50 A 95 95 0 0 1 -93.56 16.50 L -93.56 16.50 A 95 95  0 0 0 -82.27 47.50 Z"
     */

    const doubleArc = arc({
      x: cx, // center of view box
      y: cy,
      R,
      r,
      start: startAngle,
      end: endAngle
    })

    if (r === R) {
      return  this.makeSingleArc(doubleArc)
    } else {
      return doubleArc
    }
  }

  // need single arc to see round endcap shape
  // below should be refactored into fork of npm svg-arc TODO
  makeSingleArc (dblArc) {
    const moveTo = dblArc.slice(0, dblArc.indexOf('L') - 1)
    const arcPath = dblArc.slice(dblArc.indexOf('A'), dblArc.indexOf('L', dblArc.indexOf('A')) - 1)// 1st L after an A
    console.log(moveTo, arcPath)
    return `${moveTo} ${arcPath}`
  }

  render() {
    console.log('rendering', this.props)
    const {startAngle, endAngle, r, R, cx, cy} = this.props
    if (startAngle === undefined || endAngle === undefined) {
      return null
    }

    return (<>
      <path stroke="#7BCFFE" strokeLinecap="round" strokeWidth={5.8} d={this.makeArc(startAngle, endAngle, r, R, cx, cy)}></path>
      </>)
      } // end render
  } // end class History
  
  export default History
