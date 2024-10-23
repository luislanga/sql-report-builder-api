import { PrismaConnectionConfigsRepository } from "../../repositories/prisma/prismaConnectionConfigsRepository";
import { CreateConnectionConfigUseCase } from "../createConnectionConfigUseCase";

export function makeCreateConnectionConfigUseCase() {
  const connectionConfigsRepository = new PrismaConnectionConfigsRepository();
  const createConnectionConfig = new CreateConnectionConfigUseCase(connectionConfigsRepository);

  return createConnectionConfig;
}
