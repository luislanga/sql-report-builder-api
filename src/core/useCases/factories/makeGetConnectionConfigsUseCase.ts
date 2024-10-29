import { PrismaConnectionConfigsRepository } from "../../repositories/prisma/prismaConnectionConfigsRepository";
import { GetConnectionConfigsUseCase } from "../getConnectionConfigsUseCase";

export function makeGetConnectionConfigsUseCase() {
    const connectionConfigsRepository = new PrismaConnectionConfigsRepository();
    const getConnectionConfigs = new GetConnectionConfigsUseCase(connectionConfigsRepository);
  
    return getConnectionConfigs;
  }