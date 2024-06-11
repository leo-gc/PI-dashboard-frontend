// TimeseriesChart.tsx
import React from 'react';
import Chart from 'react-apexcharts';

interface TimeseriesChartProps {
  data: { x: string, y: number }[]; // Array de pontos de dados { x: string, y: number }
  interval: string; // Intervalo de tempo selecionado
  onClick: () => void; // Função a ser chamada ao clicar no gráfico
}

export const TimeseriesChart: React.FC<TimeseriesChartProps> = ({ data, interval, onClick }) => {
  const now = (val: number) => `${new Date().getHours()}:${new Date().getMinutes() - val}`;
  const options = {
    chart: {
      type: 'line',
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: [
        now(0), 
        now(1), 
        now(2), 
        now(3), 
        now(4), 
        now(5), 
        now(6), 
        now(7),
        now(8),
        now(9),
        now(10),
        now(11),
        now(12),
        now(13),
        now(14),
        now(15),
      ],
      title: {
        text: 'Tempo',
        style: {
          color: 'white',
        },
      },
      labels: {
        style: {
          colors: 'white',
        
        }
      }
      
    },
    yaxis: {
      title: {
        text: 'Nível %',
        style: {
          color: 'white',
        },
      },
      labels: {
        style: {
          colors: 'white',
        }
      }
    },

    tooltip: {
      enabled: false,
    },
    stroke: {
      curve: 'straight',
    },
  };

  return (
    <div style={{ width: '24%', height: '50%', padding: '0', margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <Chart options={options} series={[{ name: 'Reservatório', data: [10, 41, 35, 51, 49, 62, 69, 25, 80, 15, 66, 55, 21, 44, 45] }]} type="line" width="100%" height="100%" />
    </div>
  );
};

