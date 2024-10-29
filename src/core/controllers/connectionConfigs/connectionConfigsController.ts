import { Request, Response } from "express";
import { makeCreateConnectionConfigUseCase } from "../../useCases/factories/makeCreateConnectionConfigUseCase";
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
    const {type, host, port, user, password, database} = req.body
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
