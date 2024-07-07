import { User } from "../../../domain";
import { UserRepository } from "../../../application";

export class FindAllUsersUseCase {
  constructor(private userRepository: UserRepository) {}

  async execute(): Promise<User[]> {
    return await this.userRepository.findAll();
  }
}
