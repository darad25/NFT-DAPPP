import React from 'react';
import { Maincontainer, Bcontainer } from  "./monthlybargraph.styles";

import {
    Chart as ChartJS,
    BarElement,
    CategoryScale,
    LinearScale, // y
    Tooltip,
    Legend
} from 'chart.js';

import { Bar } from 'react-chartjs-2';

ChartJS.register(
    BarElement,
    CategoryScale,
    LinearScale, // y
    Tooltip,
    Legend
)

function Monthlybargraph() {
  const data = {
    labels: ['Sept','Oct', 'Nov', 'Dec', 'Jan'],
    datasets: [
      { 
        label: 'US Dollars',
        data: [1120,3556,898,380,344],
        backgroundColor: 'black',
        width: '400px',
       }    
    ]
  }

  const options = {
    scales: {
      x: {
        grid: {
          display: false
        },
        beginAtZero: true,
        max: 120,
      },
      y: {
        display: false,
        grid: {
        display: false,
        },
      }
    }
  }

  return  (
    <Maincontainer>

     <Bcontainer>
              <Bar
                data = {data}
                options = {options} 
              ></Bar>
            </Bcontainer>
        </Maincontainer>
    );
} 

export default Monthlybargraph;