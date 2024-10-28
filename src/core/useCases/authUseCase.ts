import { usersRepository } from "../repositories/usersRepository";
import { generateToken } from "../utils/generateToken";

interface AuthUseCaseRequest {
  email: string;
  password: string;
}

interface AuthUseCaseResponse {
  token: string;
}

export class AuthUseCase {
  constructor(private usersRepository: usersRepository) {}

  async execute({
    email,
    password,
  }: AuthUseCaseRequest): Promise<AuthUseCaseResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new Error("Email ou senha inválidos");
    }

    const isPasswordValid = user.password === password;

    if (!isPasswordValid) {
      throw new Error("Email ou senha inválidos");
    }

    const token = generateToken(user);
    return { token };
  }
}
