import { Request, Response } from "express";
import { makeRegisterUseCase } from "../../useCases/factories/makeRegisterUserUseCase";
import { makeGetUserByEmailUseCase } from "../../useCases/factories/makeGetUserByEmailUseCase";
import { z } from "zod";

export async function register(req: Request, res: Response): Promise<Response> {
  const registerBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { email, password } = registerBodySchema.parse(req.body);

  try {
    const registerUseCase = makeRegisterUseCase();
    const { user } = await registerUseCase.execute({ email, password });
    return res.status(201).json(user);
  } catch {
    throw new Error("Algo deu errado");
  }
}

export async function getUserByEmail(
  req: Request,
  res: Response
): Promise<Response> {

  const { email } = req.body;

  const getUserByEmailUseCase = makeGetUserByEmailUseCase();

  const { user } = await getUserByEmailUseCase.execute(email);

  return res.status(200).json(user);
}
