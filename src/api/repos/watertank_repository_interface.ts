import { getLastLevelFromWatertankResponse, getLevelFromWatertankResponse } from "../../types/responses";

export interface IWatertankRepository {
  getLevelFromWatertank(): Promise<getLevelFromWatertankResponse>
  getAllLastLevels(): Promise<getLastLevelFromWatertankResponse[]>
}