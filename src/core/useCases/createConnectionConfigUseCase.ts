import { Connection, Prisma } from "@prisma/client";
import { connectionConfigsRepository } from "../repositories/connectionConfigsRepository";

type DatabaseType = "postgres" | "mysql" | "oracle";
interface CreateConnectionConfigUseCaseRequest {
  type: DatabaseType;
  host?: string;
  port: number;
  user: string;
  password: string;
  database?: string;
  connectionString?: string;
  app_user: any;
}

interface CreateConnectionConfigUseCaseResponse {
  connection: Connection;
}

export class CreateConnectionConfigUseCase {
  constructor(
    private connectionConfigsRepository: connectionConfigsRepository
  ) {}

  async execute({
    type,
    host,
    port,
    user,
    password,
    database,
    connectionString,
    app_user,
  }: CreateConnectionConfigUseCaseRequest): Promise<CreateConnectionConfigUseCaseResponse> {
    const connection = await this.connectionConfigsRepository.create({
      type,
      host: host ?? "",
      port,
      user,
      password,
      database: database ?? "",
      connectionString: connectionString ?? "",
      app_user,
    });

    return { connection };
  }
}
