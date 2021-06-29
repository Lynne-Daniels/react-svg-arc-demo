import React, { useEffect, useState} from 'react';
import './App.css';
import Container from './Container';

let testData = [
  {
    cy: 200,
    width: 400,
    data: {
      minValue: 4,
      maxValue: 5,
    },
    metadata: {
      min: 0,
      max: 10
    }
  },
  {
    cy: 200,
    width: 400,
    data: {
      minValue: 3,
      maxValue: 5,
    },
    metadata: {
      min: 0,
      max: 10
    }
  },
  {
    cy: 200,
    width: 400,
    data: {
      minValue: 3,
      maxValue: 7,
    },
    metadata: {
      min: 0,
      max: 10
    }
  },
  {
    cy: 200,
    width: 400,
    data: {
      minValue: 0,
      maxValue: 7,
    },
    metadata: {
      min: 0,
      max: 10
    }
  },
  {
    cy: 200,
    width: 400,
    data: {
      minValue: 0,
      maxValue: 10,
    },
    metadata: {
      min: 0,
      max: 10
    }
  }
]

function App() {

  let [idx, setIdx] = useState(0)
  let [label, setLabel] = useState(0)
  let [demoData, setDemoData] = useState(
    testData[0]
  )

  useEffect(() => {
    const interval = setInterval(() => {
      
      // loop through demo data forever
      setDemoData(testData[idx])
      setLabel(idx + 1)
      setIdx((idx + 1) % testData.length)
      console.log('idx', idx, testData.length)
    }, 2000)
    return () => clearInterval(interval)
  })

   
  return (
    <div className="App">
      <h1>History Arc Demo</h1>
      <h4>DataSet: {label}</h4>
      <div style={{padding: "1rem"}}>
        <Container {...demoData} />
      </div>
    </div>
  );
}

export default App;
