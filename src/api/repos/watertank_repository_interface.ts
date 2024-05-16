import { getLevelFromWatertankResponse } from "../../types/responses";

export interface IWatertankRepository {
  getLevelFromWatertank(): Promise<getLevelFromWatertankResponse>
}