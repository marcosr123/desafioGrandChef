import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
  labels: ["Promoção de Segunda-Feira (R$ 150,00)", "Promoção de Terça-Feira (R$ 150,00)", "Taxa de entrega grátis (R$ 300,00)"],
  datasets: [
    {
      data: [150,150,900],
      borderColor: "#EF6C00",
      backgroundColor: [
        '#F28933',
        '#8F4100',
        '#EF6C00'
      ],
      hoverOffset: 4 
    },
  ],
};

const ChartPizza = () => {
  return (
    <Pie
      data={data}
      height={200}
      width={100}
      options={{ 
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            reverse: true,
            maxWidth: 300,
            align: "center",
            fullSize: true,
            labels: {
              usePointStyle: true,
              pointStyle: 'circle',
              padding: 15
            }
          },
          title: {
            display: true,
            text: "Promoções mais utilizadas",
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

export default ChartPizza;
