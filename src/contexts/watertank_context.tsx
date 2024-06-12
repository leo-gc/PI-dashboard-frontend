import React, { PropsWithChildren } from "react"
import { getLastLevelFromWatertankResponse, getLevelFromWatertankResponse } from "../types/responses"
import { GetLevelFromWaterTankUsecase } from "../api/usecases/get_level_from_watertank_usecase"
import { WatertankRepositoryHttp } from "../api/repos/watertank_repository_http"
import { httpApi } from "../api/http"
import { GetLastLevelFromWatertankUsecase } from "../api/usecases/get_last_levels_from_watertanks_usecase"
import { GetLevelFromWaterTankNMUsecase } from "../api/usecases/get_level_from_watertank_nodename_usecase"
import { GetArtesianWellUsecase } from "../api/usecases/get_artesianwell_usecase"
import { ArtesianWellRepositoryHttp } from "../api/repos/artesianwell_repository_http"

type WatertankContextType = {
  getLevelFromWatertank: () => Promise<getLevelFromWatertankResponse | undefined>
  getLevelFromWatertankByNodeName: (nodeName: string) => Promise<getLevelFromWatertankResponse | undefined>
  getAllLastLevels: () => Promise<getLastLevelFromWatertankResponse[] | undefined>
  getArtesianWell: () => Promise<any | undefined>
  lastLevels: getLastLevelFromWatertankResponse[] | undefined
}

const defaultContext: WatertankContextType = {
  getLevelFromWatertank: async () => undefined,
  getLevelFromWatertankByNodeName: async () => undefined,
  getAllLastLevels: async () => undefined,
  getArtesianWell: async () => undefined,
  lastLevels: undefined
}

export const WatertankContext = React.createContext(defaultContext)


const repo = new WatertankRepositoryHttp(httpApi)
const repoArtesian = new ArtesianWellRepositoryHttp(httpApi)
const getLevelFromWatertankUsecase = new GetLevelFromWaterTankUsecase(repo)
const getLevelFromWatertankByNodeNameUsecase = new GetLevelFromWaterTankNMUsecase(repo)
const getAllLastLevelsFromWatertanksUsecase = new GetLastLevelFromWatertankUsecase(repo)
const getArtesianWellUsecase = new GetArtesianWellUsecase(repoArtesian)

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

  const getArtesianWell = async () => {
    const response = await getArtesianWellUsecase.execute()
    return response
  }

  return (
    <WatertankContext.Provider value={{ getLevelFromWatertank, getLevelFromWatertankByNodeName, getArtesianWell, getAllLastLevels, lastLevels }}>
      {children}
    </WatertankContext.Provider>
  )
}