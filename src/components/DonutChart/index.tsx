import { ApexOptions } from "apexcharts";
import Chart from "react-apexcharts";

interface DonutChartProps {
  percentage: number
  onClick: () => void
  waterTankNumber: string
  waterTankLevel: number
  isSolo?: boolean
}

export function DonutChart({ percentage, onClick, waterTankNumber, waterTankLevel, isSolo = false }: DonutChartProps) {
  const seriesChart = [percentage, 100 - percentage]

  const colors = () => {
    if (percentage > 75) return ['#3A73E1', '#555555']
    if (percentage > 50 && percentage <= 75) return ['#d6d609', '#555555']
    if (percentage > 25 && percentage <= 50) return ['#f4780b', '#555555']
    if (percentage <= 25) return ['#f44336', '#555555']
  }

  const options: ApexOptions = {
    chart: {
      type: 'donut',
      events: {
        click: () => null,
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%'
        },
      }
    },
    colors: colors(),
    stroke: {
      width: 0
    },
    legend: {
      show: false
    },
    annotations: {
      texts: [ 
        {
          x: 140,
          y: 80,
          text: !isSolo ? `Reservatório ${waterTankNumber}` : `Nível do tanque`,
          textAnchor: 'middle',
          foreColor: 'white',
          fontSize: '12px'
        },
        {
          x: 140,
          y: 104,
          text: `Nível ${percentage}%`,
          textAnchor: 'middle',
          foreColor: 'white',
          fontSize: '12px'
        }
      ]
    },
    dataLabels: {
      enabled: false
    },
    tooltip: {
      y: {
        formatter: () => `${waterTankLevel}`,
        title: {
          formatter: () => 'Nível do tanque: '
        }
      }
    }

  }

  return <div onClick={() => onClick()} style={{ width: '24%', height: '36%', margin: 0, padding: 0, cursor: 'pointer', marginTop: isSolo ? '0px' : '4%', marginBottom: isSolo ? '3%' : '0px' }}>
    <Chart options={options} series={seriesChart} type="donut" width="100%" height="100%" />
    </div>
}