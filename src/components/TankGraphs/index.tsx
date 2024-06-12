/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect } from "react";
import { BarChart } from "../BarChart";
import { DonutChart } from "../DonutChart";
import { TimeseriesChart } from "../TimeseriesChart"
import { Container } from "./styles";
import { WatertankContext } from "../../contexts/watertank_context";
import { CirclesWithBar } from "react-loader-spinner";
import { AnimatedTitle } from "../MainCharts/styles";

type TankGraphsProps = {
  tankNumber: number;
}

export function TankGraphs({ tankNumber }: TankGraphsProps) {
  const { lastLevels, getLevelFromWatertankByNodeName } = useContext(WatertankContext)
  const [tankNodeName, setTankNodeName] = React.useState<any>()
  const lastLevel = lastLevels?.filter(level => level.i === tankNumber)[0]

  const fetchTankbyNodeName = async () => {
    try {
      const resp = await getLevelFromWatertankByNodeName(tankNumber.toString())
      setTankNodeName(resp)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchTankbyNodeName()
  }, [])

  return <Container>
    {/* <h1 style={{ cursor: 'pointer' }} onClick={fetchTankbyNodeName} >cuzinho</h1> */}
    
    { tankNodeName === undefined && <>
        <CirclesWithBar 
          color="#146cba"
          height={200}
          width={200}
          visible={true}
          wrapperStyle={{ marginTop: '10%'}}
        />
        <AnimatedTitle>Loading data...</AnimatedTitle>
        </> }
    
    { tankNodeName && <TimeseriesChart data={tankNodeName} /> }
    <BarChart />
    <DonutChart 
      percentage={lastLevel ? lastLevel.data_percentage : 0} 
      onClick={() => null} 
      waterTankNumber={tankNumber.toString()}
      waterTankLevel={lastLevel ? lastLevel.data_percentage : 0} 
      isSolo
    />
  </Container>
}