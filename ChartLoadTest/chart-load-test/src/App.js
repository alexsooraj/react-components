import React, { Component } from "react";
import Chart from "react-apexcharts";

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          animations: {
            enabled: false,
          },
          id: "basic-bar"
        },
        // xaxis: {
        //   categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
        // }
        xaxis: {
          type: 'numeric',
          tickAmount: 10,
        },
        markers: {
          size: 0,
        },
        stroke: {
          show: true,
          curve: 'smooth',
          lineCap: 'butt',
          colors: undefined,
          width: 2,
          dashArray: 0,
        },
      },
      series: [
        {
          name: "series-1",
          data: this._getLoadTestData()
        },
        // {
        //   name: "series-2",
        //   data: this._getLoadTestData()
        // }
      ]
    };
  }

  _getLoadTestData() {
    const curTime = new Date().getTime();
    const a = 0.5;
    const b = 5;
    let y;
    const arr = [];
    for (let x = 1; x <= 25000; x++) {
      y = a * (x % 100) ^ 2 + b * (x % 100) * Math.random();
      let updatedTime = new Date(curTime + ((x - 1) * 1000));
      arr.push(y);
    }
    return arr;
  }


  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
              width="100%"
              height="500"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;