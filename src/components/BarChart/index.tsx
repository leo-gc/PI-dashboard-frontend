/* eslint-disable @typescript-eslint/no-explicit-any */
import Chart from 'react-apexcharts'

export function BarChart({ data = undefined }: { data?: any[] }) {
  const seriesChart = [{
    name: 'Vazão',
    data: [
      1.45, 5.42, 5.9, -0.42, -12.6, -18.1, -18.2, -14.16, -11.1, -6.09, 0.34, 3.88, 13.07,
      5.8, 2, 7.37, 8.1, 13.57, 15.75, 17.1, 19.8, -27.03, -54.4, -47.2, -43.3, -18.6, -48.6,
      -41.1, -39.6, -37.6, -29.4, -21.4, -2.4
    ]
  }]

  return <div style={{ width: '30%', height: '40%', margin: 0, padding: 0, cursor: 'pointer', marginBottom: '3%', marginRight: '40px' }}>
    <Chart options={{
    chart: {
      type: 'bar',
    },
    plotOptions: {
      bar: {
        columnWidth: '50%',
        colors: {
          ranges: [{
            from: -100,
            to: -46,
            color: '#f44336'
          }, {
            from: -45,
            to: -26,
            color: '#f4780b'
          }, {
            from: -25,
            to: -1,
            color: '#d6d609'
          }, {
            from: 0,
            to: 100,
            color: '#3A73E1'
          }]
        }
      }
    },
    dataLabels: {
      enabled: false
    },
    yaxis: {
      title: {
        text: 'Vazão',
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
    xaxis: {
      type: 'datetime',
      title: {
        text: 'Tempo',
        style: {
          color: 'white',
        },
      },
      categories: [
        '2011-01-01', '2011-02-01', '2011-03-01', '2011-04-01', '2011-05-01', '2011-06-01',
        '2011-07-01', '2011-08-01', '2011-09-01', '2011-10-01', '2011-11-01', '2011-12-01',
        '2012-01-01', '2012-02-01', '2012-03-01', '2012-04-01', '2012-05-01', '2012-06-01',
        '2012-07-01', '2012-08-01', '2012-09-01', '2012-10-01', '2012-11-01', '2012-12-01',
        '2013-01-01', '2013-02-01', '2013-03-01', '2013-04-01', '2013-05-01', '2013-06-01',
        '2013-07-01', '2013-08-01', '2013-09-01'
      ],
      labels: {
        style: {
          colors: 'white',
        }
      }
    },
  }} 
  series={seriesChart} type="bar" width="100%" height="100%" />
  </div>
}