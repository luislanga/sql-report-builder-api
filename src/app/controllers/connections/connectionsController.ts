import { Request, Response } from "express";
import { makeQueryDbUsecase } from "../../useCases/factories/makeDbUseCase";

export async function queryDb(req: Request, res: Response): Promise<Response> {

  try {
    const dbQueryUseCase = makeQueryDbUsecase();
    const result = await dbQueryUseCase.execute("SELECT * FROM app_user");
    return res.status(201).json(result);
  } catch {
    throw new Error("Algo deu errado");
  }
}