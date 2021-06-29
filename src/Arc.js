import arc from 'svg-arc'
import React from 'react'

 /**
  * This presentational component is the sort of thing that would
  * be used over and over in a big app.  stroke details could be props. 
  * 
  * 
   * @param {*} startAngle 
   * @param {*} endAngle 
   * @param {*} r - inner radius
   * @param {*} R - outer radius if same as inner, return single arc
   * @param {*} viewBox 
   * @returns svg path d = "M startX startY" A radius radius, 0 largeArcFlag, sweepFlag, endX, endY
   */

const Arc = (props) => {
  const {startAngle, endAngle, r, R, cx, cy} = props

  if (startAngle === undefined || endAngle === undefined) {
    return null
  }

  function makeArc(startAngle, endAngle, r, R, cx, cy) {

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
      return  makeSingleArc(doubleArc)
    } else {
      return doubleArc
    }
  }

  // need single arc to see round endcap shape
  // below should be refactored into fork of npm svg-arc TODO
  function makeSingleArc (dblArc) {
    const moveTo = dblArc.slice(0, dblArc.indexOf('L') - 1)
    const arcPath = dblArc.slice(dblArc.indexOf('A'), dblArc.indexOf('L', dblArc.indexOf('A')) - 1)// 1st L after an A
    return `${moveTo} ${arcPath}`
  }

  const myArc = makeArc(startAngle, endAngle, r, R, cx, cy)

  return (
    <>
      <path stroke="#7BCFFE" strokeLinecap="round" strokeWidth={5.8} d={myArc}></path>
    </>
  )
}

export default Arc
