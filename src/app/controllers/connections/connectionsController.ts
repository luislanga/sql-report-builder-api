import { Request, Response } from "express";
import { makePGQueryDbUsecase } from "../../useCases/factories/makeDbUseCase";

export async function queryDb(req: Request, res: Response): Promise<Response> {

  try {
    const dbQueryUseCase = makePGQueryDbUsecase();
    const result = await dbQueryUseCase.execute("SELECT * FROM app_user");
    return res.status(201).json(result);
  } catch {
    throw new Error("Algo deu errado");
  }
}