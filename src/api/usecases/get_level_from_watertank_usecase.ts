import { IWatertankRepository } from "../repos/watertank_repository_interface";

export class GetLevelFromWaterTankUsecase {
  constructor(private readonly repo: IWatertankRepository) {}

  async execute() {
    const levels = await this.repo.getLevelFromWatertank();
    return levels;
  }
}