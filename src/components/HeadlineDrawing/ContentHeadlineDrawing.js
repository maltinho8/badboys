import React, { useState } from 'react';
import Chart from "react-apexcharts";

const RadialChart = () =>{
  const [series, setSeries] = useState( [
    {
      name: "BadBoys",
      data: [100, 100, 70, 60, 90, 20]
    }]);
  const [options, setOptions] = useState(
    {
      fill: {
        colors: ['orange'],
        opacity: 0.1
      },
      stroke: {
        show: true,
        width: 3.5,
        colors: ['orange'],
        dashArray: 0
      },
      markers: {
        size: 5,
        hover: {
          size: 10
        }
      },
      chart: {
        height: 350,
        type: 'radar',
        toolbar: {
          show: false
        },
        markers: {
          size: 5,
          hover: {
            size: 10,
            colors: '#fc9303'
          }
        }
      },
      xaxis: {
        categories: ['Attraktivität', 'Teamgeist', 'Power', 'Spielwitz', 'Wille', 'Ausdauer']
      },
      yaxis: {
        show: false
      }
    }
  );

  return (
    <Chart
      options={options}
      series={series}
      type="radar"
      width="700"
    />
  );
}
export default RadialChart;