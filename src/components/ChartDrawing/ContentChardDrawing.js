import React, { useState } from 'react';
import Chart from "react-apexcharts";
const { innerWidth: width } = window;

const RadialChart = () =>{
  const [series] = useState( [
    {
      name: "BadBoys",
      data: [100, 100, 70, 60, 90, 20]
    }]);
  const [options] = useState(
    {
      fill: {
        colors: ['black'],
        opacity: 0.1
      },
      stroke: {
        show: true,
        width: 3.5,
        colors: ['black'],
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
        categories: ['Attraktivität', 'Teamgeist', 'Power', 'Spielwitz', 'Wille', 'Ausdauer'],
        labels: {
          show: true,
          style: {
    colors: ["#050505", "#050505","#050505","#050505","#050505","#050505"]
  }
        }
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
        width={width >= 768 ? 700 : 520}
      />

  );
}
export default RadialChart;