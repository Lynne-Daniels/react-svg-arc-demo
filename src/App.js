import React from 'react';
import './App.css';
import History from './History';
import { convertUnitsToDegrees } from './calculations.js'

const viewBox = "-110 -110 220 220"
const [minX, minY, width, height ] = viewBox.split(' ')
const viewBoxParams = { minX, minY, width, height}
console.log(viewBoxParams, parseInt(viewBoxParams.width, 10) + parseInt((2 * viewBoxParams.minX), 10))
const r = 100
const R = 100



const amps = [
  {
    minValue: 0,
    maxValue: 1,
  },
  {
    minValue: 9,
    maxValue: 10,
  },
  {
    minValue: 0,
    maxValue: 10,
  },
  {
    minValue: -2,
    maxValue: 14,
  },
  {
    minValue: 4,
    maxValue: 6,
  },
  {
    minValue: 2,
    maxValue: 7,
  },
  {
    minValue: 2,
    maxValue: 5,
  },
]

const angles = amps.map(v => {
  return {
    startAngle: convertUnitsToDegrees(v.minValue, 0, 10),
    endAngle: convertUnitsToDegrees(v.maxValue, 0, 10),
  }
})

const tests = angles.map((val) => {
  return {
    ...val,
    r: r * .95,
    R: R * .95,
    cx: parseInt(viewBoxParams.width) + parseInt((2 * viewBoxParams.minX), 10),
    cy: parseInt(viewBoxParams.height) + parseInt((2 * viewBoxParams.minY), 10),
    viewBox,
  }
})


const guages = tests.map(test => {
  return (
    <React.Fragment key={JSON.stringify(test)}>
        <svg style={{height: "400px"}} viewBox={test.viewBox} fill="#22222">
        <circle cx={0} cy={0} r={100} fill="black"/>
          < History {...test} />
          <text fontSize="smaller" x="-100" y="90" fill="#7BCFFE">{`Low: ${test.startAngle} High: ${test.endAngle}`}</text>
        </svg>
      </React.Fragment>
  )
})

function App() {
  return (
    <div className="App">
      {guages}
    </div>
  );
}

export default App;
