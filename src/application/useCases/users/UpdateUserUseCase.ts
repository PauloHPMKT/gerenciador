import { UserRepository } from "application/repositories/user.repository";
import { UpdateUserDto } from "../../../presentation";

export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string, userUpdated: UpdateUserDto) {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }
    Object.assign(user, userUpdated);
    return this.userRepository.updateUser(id, user);
  }
}
