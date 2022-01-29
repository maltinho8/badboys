import React from 'react';
import styled from 'styled-components';
import Chart from "react-apexcharts";

const Container = styled.div`
position: absolute;
top: 28rem;

  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  
  
`;



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
          }
        },
        xaxis: {
          categories: ['Attraktivität', 'Teamgeist', 'Power', 'Spielwitz', 'Wille', 'Ausdauer']
        },
        responsive: [{
          breakpoint: 1000,
          options: {},
      }]
      },
    
    
    };
  }



  render() {
    return (
      

<Container>
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="radar"
              width="700"
            />
        </Container>


    );
  }
}
export default RadialChart;

