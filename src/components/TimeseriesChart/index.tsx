// TimeseriesChart.tsx
import React from 'react';
import Chart from 'react-apexcharts';

interface TimeseriesChartProps {
  data: any[];
}

export const TimeseriesChart: React.FC<TimeseriesChartProps> = ({ data }) => {
  console.log(data)
  const chartData = data.map((item: { timestamp: number; fields: { data_distance: number; } }) => ({
    x: new Date(item.timestamp / 1000000), // Convertendo o timestamp para milissegundos
    y: item.fields.data_distance,
  }));

  const options = {
    chart: {
      type: 'line' as const, // Corrigindo o tipo
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      type: 'datetime', // Mudando para datetime
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
    <div style={{ width: '40%', height: '50%', padding: '0', margin: '0', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingRight: '32px' }}>
      <Chart options={options} series={[{ name: 'Reservatório', data: chartData }]} type="line" width="100%" height="100%" />
    </div>
  );
};