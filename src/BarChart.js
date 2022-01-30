import React, { Component } from 'react';
import CanvasJSReact from './assets/canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;

class BarChart extends Component {
  addSymbols(e) {
    var suffixes = ['', 'K', 'M', 'B'];
    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
    if (order > suffixes.length - 1) order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
  }
  render() {
    const countries = this.props.countries;
    const array = [
    	...countries
        .map((el) => {
          return { label: el.name.common, y: el.population };
        })
    ];
		const sortedArray = array.sort((a, b) => {
			return b.y - a.y;
		}).slice(0,11)
    console.log(sortedArray,'sorted');
    const options = {
      animationEnabled: true,
      theme: 'light2',
      title: {
        text: 'Popularity Of Countries',
      },
      axisX: {
        title: 'Countries',
        reversed: true,
      },
      axisY: {
        title: 'Popularity',
        labelFormatter: this.addSymbols,
      },
      data: [
        {
          type: 'bar',
          dataPoints: [...sortedArray]
        },
      ],
    };

    return (
      <div>
        <h1>React Bar Chart</h1>
        <CanvasJSChart
          options={options}
          /* onRef={ref => this.chart = ref} */
        />
        {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
      </div>
    );
  }
}

export default BarChart;
