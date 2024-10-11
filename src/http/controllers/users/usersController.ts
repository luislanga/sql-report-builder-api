import { Request, Response } from "express";
import { makeRegisterUseCase } from "../../../useCases/factories/makeRegisterUseCase";
import { makeGetUserByEmailUseCase } from "../../../useCases/factories/makeGetUserByEmailUseCase";

const fakeUser = {
  email: "johndoe4@example.com",
  password: "fakehashedpassword123",
};

export async function register(req: Request, res: Response): Promise<Response> {
  const registerUseCase = makeRegisterUseCase();

  const { user } = await registerUseCase.execute(fakeUser);

  return res.status(201).json(user);
}

export async function getUserByEmail(
  req: Request,
  res: Response
): Promise<Response> {
  const getUserByEmailUseCase = makeGetUserByEmailUseCase();

  const { user } = await getUserByEmailUseCase.execute(fakeUser.email);

  return res.status(200).json(user);
}
