import React from 'react';
import './App.css';
import History from './History';

function Container(props) {

  const test = {...props}

  return (
    <React.Fragment key={JSON.stringify(test)}>
    <svg style={{height: props.cy * 2 + 30}} viewBox={`0 0 ${props.width} ${props.cy * 2 + 30}`} fill="#22222">
    <circle cx={props.width / 2} cy={props.cy} r={props.width / 2} fill="black"/>
      < History {...test} />
      <text fontSize="smaller" x={props.width / 2 - 40} y={props.cy * 2 - 20} fill="#7BCFFE">{`Low: ${props.data.minValue} High: ${props.data.maxValue}`}</text>
    </svg>
  </React.Fragment>
  );
}


export default Container;
