import { IWatertankRepository } from "../repos/watertank_repository_interface";

export class GetLastLevelFromWatertankUsecase {
  constructor(private readonly repo: IWatertankRepository) {}

  async execute() {
    const levels = await this.repo.getAllLastLevels();
    return levels;
  }
}