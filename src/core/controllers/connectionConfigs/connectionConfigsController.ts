import { Request, Response } from "express";
import { makeCreateConnectionConfigUseCase } from "../../useCases/factories/makeCreateConnectionConfigUseCase";
import { makeGetConnectionConfigsUseCase } from "../../useCases/factories/makeGetConnectionConfigsUseCase";

export async function createConnectionConfig(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const app_user = {
      connect: {
        id: req.user?.id,
      },
    };
    const { type, host, port, user, password, database } = req.body;
    const clientDbConfig = {
      type,
      host,
      port,
      user,
      password,
      database,
      app_user,
    };
    const createConnectionConfigUseCase = makeCreateConnectionConfigUseCase();
    const connection = await createConnectionConfigUseCase.execute(
      clientDbConfig
    );
    return res.status(201).json(connection);
  } catch (error) {
    throw new Error("Algo deu errado");
  }
}

export async function getConnectionConfigs(
  req: Request,
  res: Response
): Promise<Response> {
  try {
    const connectionConfigsRepository = makeGetConnectionConfigsUseCase();

    if (!req.user) {
      return res.status(401).json({ message: "Usuário não encontrado" });
    }

    const connections = await connectionConfigsRepository.execute(req.user.id);
    return res.status(200).json(connections);
  } catch (error) {
    throw new Error("Algo deu errado");
  }
}
