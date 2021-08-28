import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Abr 3", "Abr 4", "Abr 5", "Abr 6", "Abr 7", "Abr 8", "Abr 9"],
  datasets: [
    {
      data: [100, 200, 150, 200, 300, 200, 400],
      borderColor: "#EF6C00",
      pointBackgroundColor: "#EF6C00",
      options: {},
    },
  ],
};

const Chart = () => {
  return (
    <Line
      data={data}
      options={{ 
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: true,
            text: "Faturamento Diário",
            align: "start",
            padding: {
              top: 0,
              bottom: 30,
              right: 0,
              left: 20
            },
            font: {
              family: "Roboto",
              size: 14
            }
          },
        },
      }}
    />
  );
};

export default Chart;
