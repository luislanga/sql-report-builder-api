import { z } from "zod";
import { makeAuthUseCase } from "../../useCases/factories/makeAuthUseCase";
import { Request, Response } from "express";

export async function login(req: Request, res: Response): Promise<Response> {
  const loginBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6),
  });

  const { email, password } = loginBodySchema.parse(req.body);

  try {
    const authUseCase = makeAuthUseCase();
    const { token } = await authUseCase.execute({ email, password });
    return res.status(200).json({ token });
  } catch (err: any) {
    return res.status(401).json({ message: err.message });
  }
}
