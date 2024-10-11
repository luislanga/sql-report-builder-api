import { Request, Response } from "express";
import { makeRegisterUseCase } from "../../../useCases/factories/makeRegisterUseCase";

export async function register(req: Request, res: Response): Promise<Response> {
  const fakeUser = {
    email: "johndoe2@example.com",
    password: "fakehashedpassword123",
  };

  const registerUseCase = makeRegisterUseCase()

  await registerUseCase.execute(fakeUser)
  
  return res.status(201).json(fakeUser)
}
