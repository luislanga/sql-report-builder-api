import { User } from "@prisma/client";
import { usersRepository } from "../repositories/usersRepository";

interface RegisterUseCaseResponse {
  user: User | null;
}

export class GetUserByEmailUseCase {
  constructor(private userRepository: usersRepository) {}

  async execute(email: string): Promise<RegisterUseCaseResponse> {
    const user = await this.userRepository.findByEmail(email);

    return { user };
  }
}
