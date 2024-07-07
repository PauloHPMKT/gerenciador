import { UserRepository } from "../../repositories/user.repository";

export class ManagerActiveUserStatusUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute(id: string, status: boolean): Promise<void> {
    const user = await this.userRepository.verify({ _id: id });
    if (!user) {
      throw new Error('User not found');
    }

    return await this.userRepository.updateActiveStatus(id, status);
  }
}
