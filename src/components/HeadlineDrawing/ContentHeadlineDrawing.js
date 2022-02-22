import React from 'react';
import Chart from "react-apexcharts";
import styled from 'styled-components';

class RadialChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [
        {
          name: "BadBoys",
          data: [100, 100, 70, 60, 90, 20]
        },
    
      ],
      options: {
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
        
      },
    
    
    };
  }



  render() {
    return (
      

            
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="radar"
              width="700"
            />
            
        


    );
  }
}
export default RadialChart;

