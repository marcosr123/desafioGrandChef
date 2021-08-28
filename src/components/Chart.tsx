import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Abr 3", "Abr 4", "Abr 5", "Abr 6", "Abr 7", "Abr 8", "Abr 9"],
  datasets: [
    {
      data: [100, 200, 150, 200, 300, 200, 400],
      borderColor: "#EF6C00",
      options: {
        
    }
    },
  ],
};

const Chart = () => {
  return <Line data={data} options={
    {
        label: {
            display: false
        },
        plugins: {
        title: {
            display: true,
            text: 'Custom Chart Title',
            align: 'start'
        }
    }}
  }/>;
};

export default Chart;
