/* eslint-disable @typescript-eslint/no-explicit-any */
// TimeseriesChart.tsx
import { ApexOptions } from 'apexcharts';
import React from 'react';
import Chart from 'react-apexcharts';

interface TimeseriesChartProps {
  data: any[];
}

export const TimeseriesChart: React.FC<TimeseriesChartProps> = ({ data }) => {
  const chartData = data.map((item: { timestamp: number; fields: { data_distance: number; } }) => ({
    x: new Date(item.timestamp / 1000000),
    y: item.fields.data_distance,
  }));

  const options: ApexOptions = {
    title: {
      text: 'Nível de Água do Reservatório',
      align: 'center',
      style: {
        color: 'white',
      },
    },
    chart: {
      type: 'line' as const,
      zoom: {
        enabled: false,
      },
      toolbar: {
        show: true,
        tools: {
          download: true, // Habilita a opção de download
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true
        },
        autoSelected: 'zoom' 
      },
    },
    dataLabels: {
      enabled: false,
    },
    
    xaxis: {
      type: 'datetime',
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
        text: 'Distância',
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
      enabled: true,
    },
    stroke: {
      curve: 'straight',
    },
    theme: {
      mode: 'dark',
    }
  };

  if (chartData.length === 0) {
    return <p>Não há dados disponíveis.</p>;
  }

  return (
    <div style={{ width: '40%', height: '50%', padding: '0', margin: '0', paddingRight: '32px' }}>
      <Chart options={options} series={[{ name: 'Reservatório', data: chartData }]} type="line" width="100%" height="100%" />
    </div>
  );
};