import { IWatertankRepository } from "../repos/watertank_repository_interface";

export class GetLevelFromWaterTankNMUsecase {
  constructor(private readonly repo: IWatertankRepository) {}

  async execute(nodename: string) {
    const levels = await this.repo.getLevelFromWaterTankByNodeName(`WaterTankLavel_${nodename}`);
    return levels;
  }
}