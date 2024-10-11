import { User } from "@prisma/client";
import { usersRepository } from "../repositories/usersRepository";

interface RegisterUseCaseResponse {
  user: User | null;
}

export class GetUserByEmailUseCase {
  constructor(private userReporsitory: usersRepository) {}

  async execute(email: string): Promise<RegisterUseCaseResponse> {
    const user = await this.userReporsitory.findByEmail(email);

    return { user };
  }
}
