import { User } from "../../../domain/entities/User";
import { UserRepository } from "../../repositories/user.repository";

export class FindAllUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return await this.userRepository.findAll();
  }
}
