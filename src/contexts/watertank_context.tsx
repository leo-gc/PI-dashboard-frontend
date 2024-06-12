import React, { PropsWithChildren } from "react"
import { getLastLevelFromWatertankResponse, getLevelFromWatertankResponse } from "../types/responses"
import { GetLevelFromWaterTankUsecase } from "../api/usecases/get_level_from_watertank_usecase"
import { WatertankRepositoryHttp } from "../api/repos/watertank_repository_http"
import { httpApi } from "../api/http"
import { GetLastLevelFromWatertankUsecase } from "../api/usecases/get_last_levels_from_watertanks_usecase"
import { GetLevelFromWaterTankNMUsecase } from "../api/usecases/get_level_from_watertank_nodename_usecase"

type WatertankContextType = {
  getLevelFromWatertank: () => Promise<getLevelFromWatertankResponse | undefined>
  getLevelFromWatertankByNodeName: (nodeName: string) => Promise<getLevelFromWatertankResponse | undefined>
  getAllLastLevels: () => Promise<getLastLevelFromWatertankResponse[] | undefined>
  lastLevels: getLastLevelFromWatertankResponse[] | undefined
}

const defaultContext: WatertankContextType = {
  getLevelFromWatertank: async () => undefined,
  getLevelFromWatertankByNodeName: async () => undefined,
  getAllLastLevels: async () => undefined,
  lastLevels: undefined
}

export const WatertankContext = React.createContext(defaultContext)


const repo = new WatertankRepositoryHttp(httpApi)
const getLevelFromWatertankUsecase = new GetLevelFromWaterTankUsecase(repo)
const getLevelFromWatertankByNodeNameUsecase = new GetLevelFromWaterTankNMUsecase(repo)
const getAllLastLevelsFromWatertanksUsecase = new GetLastLevelFromWatertankUsecase(repo)

export function WatertankContextProvider({ children }: PropsWithChildren) {
  const [lastLevels, setLastLevels] = React.useState<getLastLevelFromWatertankResponse[] | undefined>(undefined)

  const getLevelFromWatertank = async () => {
    const response = await getLevelFromWatertankUsecase.execute()
    return response
  }

  const getLevelFromWatertankByNodeName = async (nodeName: string) => {
    const response = await getLevelFromWatertankByNodeNameUsecase.execute(nodeName)
    return response
  }

  const getAllLastLevels = async () => {
    const response = await getAllLastLevelsFromWatertanksUsecase.execute()
    if (response) setLastLevels(response)
    return response
  }

  return (
    <WatertankContext.Provider value={{ getLevelFromWatertank, getLevelFromWatertankByNodeName, getAllLastLevels, lastLevels }}>
      {children}
    </WatertankContext.Provider>
  )
}