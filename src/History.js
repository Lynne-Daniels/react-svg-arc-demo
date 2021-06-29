import React from 'react'
import Arc from './Arc'
import { convertUnitsToDegrees } from './calculations.js'

/**
 * props.data.minValue, data.maxValue, props.metadata.min, metadata.max
 * cx = this.width/2 where "this" is parent,  cy = this.cy
 */


class History extends React.Component {

  render() {
    // kludgy validation - IRL, data and metadata may be handled further up the component tree?
    // error boundries? default component? shudder... imagines a dashboard of little error widgets :-(
    // proptypes, typescript?
    
    if (!this.props.data || this.props.data.minValue === undefined || this.props.data.maxValue  === undefined || this.props.data.minValue === null || this.props.data.maxValue === null) {
      return null
    }

    if (!this.props.metadata || this.props.metadata.min === undefined || this.props.metadata.max === undefined ||  this.props.metadata.min === null || this.props.metadata.max === null) {
      return null
    }

    const startAngle = convertUnitsToDegrees(this.props.data.minValue, this.props.metadata.min, this.props.metadata.max)
    const endAngle = convertUnitsToDegrees(this.props.data.maxValue, this.props.metadata.min, this.props.metadata.max)
    const cx = this.props.width / 2
    const cy = this.props.cy
    const r = this.props.width / 2 * .95

    const props = {startAngle, endAngle, r, cx, cy}
console.log(props)
    if (startAngle === undefined || endAngle === undefined) {
      return null
    }

    return <Arc {...props} R={r} />
      } // end render
  } // end class History
  
  export default History
