import { getLastLevelFromWatertankResponse, getLevelFromWatertankResponse } from "../../types/responses";

export interface IWatertankRepository {
  getLevelFromWatertank(): Promise<getLevelFromWatertankResponse>
  getLevelFromWaterTankByNodeName(nodeName: string): Promise<getLevelFromWatertankResponse>
  getAllLastLevels(): Promise<getLastLevelFromWatertankResponse[]>
}