    //Thanks stackoverflow.com/questions/5736398/how-to-calculate-the-svg-path-for-an-arc-of-a-circle
  //   makeMyPath() {
  //     function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  //   var angleInRadians = (angleInDegrees-90) * Math.PI / 180.0;
  
  //   return {
  //     x: centerX + (radius * Math.cos(angleInRadians)),
  //     y: centerY + (radius * Math.sin(angleInRadians))
  //   };
  // }
  
  // function describeArc(x, y, radius, startAngle, endAngle, largeArcFlag, sweepFlag){
  
  //     var start = polarToCartesian(x, y, radius, endAngle);
  //     var end = polarToCartesian(x, y, radius, startAngle);
  
  //     // var largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
  //     // makes it right way up and use top of circle for 120 to 240
  //     // var largeArcFlag = 1;
  //     // var sweepFlag = 1;
  
  //     var d = [
  //         "M", start.x, start.y, 
  //         // A rx ry x-axis-rotation large-arc-flag sweep-flag x y
  //         "A", radius, radius, 0, largeArcFlag, sweepFlag, end.x, end.y
  //     ].join(" ");
  //     return d;  
  //   }
  
  //     // x, y, radius, startAngle, endAngle
  //     let {x, y, radius, startAngle, endAngle, largeArcFlag, sweepFlag} = this.props
  //     // const myPath = describeArc(150, 150, 100, 270, 90)
  //     const myPath = describeArc(x, y, radius, startAngle, endAngle, largeArcFlag, sweepFlag)
  //     console.log('mounted', myPath)
  //     return myPath
      // return "M 50 150 A 100 100 0 1 0 150 50"
    // }


const props1 = {
  x: -100,
  y: 0,
  radius: 100,
  startAngle: 180,
  endAngle: 90,
  largeArcFlag: 0,
  sweepFlag: 0,
  cx: 0,
  cy: 0,
  cr: 100,
}

const props2 = {
  x: 0,
  y: 100,
  radius: 100,
  startAngle: 180,
  endAngle: 45,
  largeArcFlag: 1,
  sweepFlag: 1,
  cx: 100,
  cy:100,
  cr: 100,
}

const props3 = {
  x: 150,
  y: 350,
  radius: 100,
  startAngle: 30,
  endAngle: 80,
  largeArcFlag: 0,
  sweepFlag: 0,
  cx: 150,
  cy:250,
  cr: 100,
}

const props4 = {
  x: 150,
  y: 350,
  radius: 100,
  startAngle: 60,
  endAngle: 300,
  largeArcFlag: 1,
  sweepFlag: 1,
  cx: 150,
  cy:250,
  cr: 100,
}