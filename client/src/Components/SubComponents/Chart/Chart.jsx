import React from 'react';
import style from './Chart.module.scss';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Electric', 'Bass', 'Acoustic', 'Acoustic-Electric'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5],
      backgroundColor: [
        'rgba(37, 75, 98, 1)',
        'rgba(41, 109, 124, 1)',
        'rgba(119, 171, 183, 1)',
        'rgba(179, 215, 223, 1)'
      ],
      borderColor: [
        'rgba(37, 75, 98, 1)',
        'rgba(41, 109, 124, 1)',
        'rgba(119, 171, 183, 1)',
        'rgba(179, 215, 223, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

export default function Chart(){
  return( 
    <div className={style.container}>
        <Pie data={data} />
    </div>
    );
}
