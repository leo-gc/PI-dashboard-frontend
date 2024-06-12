import { useContext, useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { Container } from './styles';
import { WatertankContext } from '../../contexts/watertank_context';

export function ArtesianChart() {
  const { getArtesianWell } = useContext(WatertankContext)
  const [entradaData, setEntradaData] = useState([]);
  const [saidaData, setSaidaData] = useState([]);
  const [entradaSaidaData, setEntradaSaidaData] = useState([]);

  const fetchArtesianWell = async () => {
    try {
      const resp = await getArtesianWell();
  
      if (!resp) {
        console.log('No data returned from getArtesianWell');
        return;
      }

      const entradaData = resp.map((item: { timestamp: any; fields: { data_pressure_0: any; }; }) => ({ x: new Date(item.timestamp / 1000000), y: item.fields.data_pressure_0 }));
      const saidaData = resp.map((item: { timestamp: any; fields: { data_pressure_1: any; }; }) => ({ x: new Date(item.timestamp / 1000000), y: item.fields.data_pressure_1 }));
      const entradaSaidaData = resp.map((item: { timestamp: any; fields: { data_pressure_0: any; data_pressure_1: any; }; }) => ({ x: new Date(item.timestamp / 1000000), y: item.fields.data_pressure_0 - item.fields.data_pressure_1 }));
      setEntradaData(entradaData);
      setSaidaData(saidaData);
      setEntradaSaidaData(entradaSaidaData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchArtesianWell();
  }, []);

  const options = {
    title: {
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
          download: true,
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
        text: 'Pressão',
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
      width: 1,
    },
    theme: {
      mode: 'dark',
    }
  };

  if (!entradaData.length) {
    return <Container>Loading...</Container>;
  }

  const optionsEntrada = { ...options, title: { ...options.title, text: 'Pressão de Entrada do Poço Artesiano' } };
  const optionsSaida = { ...options, title: { ...options.title, text: 'Pressão de Saída do Poço Artesiano' } };
  const optionsEntradaSaida = { ...options, title: { ...options.title, text: 'Diferença de Pressão do Poço Artesiano' } };

  return (
    <Container>
      <div style={{ width: '40%', height: '50%', padding: '0', margin: '0', paddingRight: '32px' }}>
        <Chart options={optionsEntrada} series={[{ name: 'Entrada', data: entradaData }]} type="line" width="100%" height="100%" />
      </div>
      <div style={{ width: '40%', height: '50%', padding: '0', margin: '0', paddingRight: '32px' }}>
        <Chart options={optionsSaida} series={[{ name: 'Saída', data: saidaData }]} type="line" width="100%" height="100%" />
      </div>
      <div style={{ width: '40%', height: '50%', padding: '0', margin: '0', paddingRight: '32px' }}>
        <Chart options={optionsEntradaSaida} series={[{ name: 'Entrada-Saída', data: entradaSaidaData }]} type="line" width="100%" height="100%" />
      </div>
    </Container>
  );
}