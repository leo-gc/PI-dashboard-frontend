import Chart from "react-apexcharts";

interface DonutChartProps {
  value: number
  onClick: () => void
  waterTankNumber: string
}

export function DonutChart({ value, onClick, waterTankNumber }: DonutChartProps) {
  const seriesChart = [value, 100 - value]

  return <div style={{ width: '20%', height: '40%', margin: 0, padding: 0 }}>
    <Chart options={{
    chart: {
      type: 'donut',
      events: {
        dataPointSelection: () => {
          onClick()
        }
      }
    },
    plotOptions: {
      pie: {
        donut: {
          size: '70%'
        },
      }
    },
    colors: ['#3A73E1', '#555555'],
    stroke: {
      width: 0
    },
    legend: {
      show: false
    },
    annotations: {
      texts: [ 
        {
          x: '50%',
          y: '40%',
          text: `Reservatório ${waterTankNumber}`,
          textAnchor: 'middle',
          foreColor: 'white',
          fontSize: '12px'
        },
        {
          x: '50%',
          y: '50%',
          text: `Nível ${value}%`,
          textAnchor: 'middle',
          foreColor: 'white',
          fontSize: '12px'
        }
      ]
    },
    dataLabels: {
      enabled: false
    }
  }} series={seriesChart} type="donut" width="100%" height="100%" />
    </div>
}