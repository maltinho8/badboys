import React from 'react';
import styled from 'styled-components';
import Chart from "react-apexcharts";

const Container = styled.div`

justify-content: space-between;  
width:100%;

`;

const Test = styled.div`
float:left; 
`;


class CircleChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [
        100],
      
      options: {

        chart: {
          height: 350,
          type: 'radialBar',
          

          
        },
        plotOptions: {
          radialBar: {
            hollow: {
              size: '70%',
            }
          },
        },
        labels: ['Aufstieg 2018'],

      },
    
    
    };
  }



  render() {
    return (
      

<Container>
            <Test>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="radialBar"
              width="250"
            /></Test>
            <Test>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="radialBar"
              width="250"
            /></Test>
            <Test>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="radialBar"
              width="250"
            /></Test>
          
        </Container>


    );
  }
}
export default CircleChart;

