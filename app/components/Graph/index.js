import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';
import { SORT_BY_MARKS } from '../../containers/Dashboard/constants';
import { getStudents } from '../../containers/Dashboard/selectors';

const students = getStudents();

//  const data=Object.keys(students).map(el => el=='name'? el : '';

const options = {
  chart: {
    type: 'bar',
    height: 600,
  },
  xAxis: {
    categories: Object.keys(students).map(el =>
      Object.keys(el).reduce((a, b) => b + a),
    ),
  },

  legend: {
    layout: 'vertical',
    floating: true,
    backgroundColor: 'blue',
    align: 'left',
    verticalAlign: 'top',
    y: 60,
    x: 90,
  },

  title: {
    text: 'Students Marks Graph',
  },

  series: [
    {
      data: Object.keys(students).map(el => (el === 'rollNo' ? el : 6)),
    },
  ],

  //   data: {
  //     columns: [
  //       [null, 'Apples', 'Pears', 'Oranges'], // categories
  //       ['Ola', 1, 4, 3], // first series
  //       ['Kari', 5, 4, 2], // second series
  //     ],
  //   },
};

// const chart1 = Highcharts.chart({
//     chart: {
//         renderTo: 'container',
//         type: 'bar'
//     },
//     title: {
//         text: 'Fruit Consumption'
//     },
//     xAxis: {
//         categories: ['Apples', 'Bananas', 'Oranges']
//     },
//     yAxis: {
//         title: {
//             text: 'Fruit eaten'
//         }
//     },
//     series: [{
//         name: 'Jane',
//         data: [1, 0, 4]
//     }, {
//         name: 'John',
//         data: [5, 7, 3]
//     }[
// });

const Graph = () => (
  <div>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
);

export default Graph;

// import { Canvas } from 'react-canvas-js';
// // var React = require('react');
// import React from 'react';

// // var Component = React.Component;
// var CanvasJSReact = Canvas.CanvasJSReact;
// // var CanvasJS = CanvasJSReact.CanvasJS;
// var CanvasJSChart = CanvasJSReact.CanvasJSChart;
// export default (Graph = () => {
//   const options = {
//     title: {
//       text: 'Basic Column Chart',
//     },
//     data: [
//       {
//         // Change type to "doughnut", "line", "splineArea", etc.
//         type: 'column',
//         dataPoints: [
//           { label: 'Apple', y: 10 },
//           { label: 'Orange', y: 15 },
//           { label: 'Banana', y: 25 },
//           { label: 'Mango', y: 30 },
//           { label: 'Grape', y: 28 },
//         ],
//       },
//     ],
//   };
//   return (
//     <div>
//       <CanvasJSChart
//         options={options}
//         /* onRef={ref => this.chart = ref} */
//       />
//       {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
//     </div>
//   );
// });
