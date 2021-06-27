import './App.css';
import History from './History';

const viewBoxParams = "-110 -110 220 220"
const radius = 100

const angles = [
  {s: 225, e: 180},
  {s: 225, e: 135},
  {s: 225, e: 100},
  {s: 225, e: 80},
  {s: 225, e: 0},
  {s: 225, e: 315},
]
const tests = angles.reduce((acc, val) => {
  // try reversed and regular
  console.log('val', val)
  // const revs = [{startAngle: val.s, endAngle: val.e}, {startAngle: val.e, endAngle: val.s}]
  const revs = [{startAngle: val.s, endAngle: val.e}]
  revs.forEach(rev => {
    acc = acc.concat({...rev, radius, viewBox: viewBoxParams,
      largeArcFlag: 1,
      sweepFlag: 1
    })
    acc = acc.concat({...rev, radius, viewBox: viewBoxParams,
      largeArcFlag: 0,
      sweepFlag: 0
    })
    acc = acc.concat({...rev, radius, viewBox: viewBoxParams,
      largeArcFlag: 0,
      sweepFlag: 1
    })
    acc = acc.concat({...rev, radius, viewBox: viewBoxParams,
      largeArcFlag: 1,
      sweepFlag: 0
    })
  })
  return acc
},[])

console.log('testx', tests)

const testData = tests
// const testData = [
//   {
//     startAngle: 225,
//     endAngle: 315,
//     radius,
//     viewBox: viewBoxParams,
//     largeArcFlag: 0,
//     sweepFlag: 0
//   },
//   {
//     startAngle: 225,
//     endAngle: 315,
//     radius,
//     viewBox: viewBoxParams,
//     largeArcFlag: 1,
//     sweepFlag: 1
//   },
//   {
//     startAngle: 225,
//     endAngle: 315,
//     radius,
//     viewBox: viewBoxParams,
//     largeArcFlag: 0,
//     sweepFlag: 1
//   },
//   {
//     startAngle: 315,
//     endAngle: 225,
//     radius,
//     viewBox: viewBoxParams,
//     largeArcFlag: 1,
//     sweepFlag: 0
//   }
// ]

const guages = testData.map(test => {
  return (
    <>
        <svg style={{height: "200px"}} viewBox={test.viewBox} fill="#22222">
        <circle cx={0} cy={0} r={test.radius} fill="black"/>
          <History {...test}/>
          <text fontSize="smaller" x="-100" y="90" fill="#7BCFFE">{`startA: ${test.startAngle} endA: ${test.endAngle}`}</text>
        </svg>
      </>
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
