import { UserRepository } from "application/repositories/user.repository";
import { User } from "../../../domain";
import { UpdateUserAvatarDto } from "presentation/dto/users/UpdateUserAvatarDto";

export class UpdateUserAvatarUseCase {
  constructor(
    private readonly userRepository: UserRepository
  ) {}

  async execute({id, avatar}: UpdateUserAvatarDto): Promise<any> {
    const user = await this.userRepository.findById(id);
    if (!user) {
      throw new Error('User not found');
    }

    await this.userRepository.updateUserAvatar({ id, avatar });
    return { ...user, avatar };
  }
}
