import { User } from "@prisma/client";
import { usersRepository } from "../repositories/usersRepository";

interface RegisterUseCaseRequest {
  email: string;
  password: string;
}

interface RegisterUseCaseResponse {
  user: User;
}

export class RegisterUseCase {
  constructor(private usersRepository: usersRepository) {}

  async execute({
    email,
    password,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const user = await this.usersRepository.create({
      email,
      password,
    });

    return { user };
  }
}
