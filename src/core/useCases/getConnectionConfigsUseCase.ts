import { Connection } from "@prisma/client";
import { connectionConfigsRepository } from "../repositories/connectionConfigsRepository";

interface GetConnectionConfigsUseCaseResponse {
  connection: Connection | null;
}

export class GetConnectionConfigsUseCase {
  constructor(
    private getConnectionConfigsRepository: connectionConfigsRepository
  ) {}

  async execute(id: any): Promise<GetConnectionConfigsUseCaseResponse> {
    const connection = await this.getConnectionConfigsRepository.findById(id);

    return { connection };
  }
}
