import { UpdateUserAvatarUseCase } from "application/useCases/users/UpdateUserAvatarUseCase";
import { join } from "path";

export class UpdateUserAvatarController {
  constructor(private readonly updateUserAvatarUseCase: UpdateUserAvatarUseCase) {}

  async handle(request: any, response: any): Promise<any> {
    const { id } = request.params;
    const { filename } = request.file;

    try {  
      if (!filename) {
        return response.status(400).json({ message: 'Avatar is required' });
      }

      const userAvatar = filename; 
      const updateAvatar = {
        id,
        avatar: userAvatar
      }

      const user = await this.updateUserAvatarUseCase.execute(updateAvatar);
      return response.status(200).json(user);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
