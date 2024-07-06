import { Request, Response } from "express"; 
import { User } from "../../../domain/entities/User";
import { FindAllUsersUseCase } from "../../../application/useCases/users/FindAllUsersUseCase";

export class FindAllUsersController {
  constructor(private findAllUsersUseCase: FindAllUsersUseCase) {}

  async handle(req: Request, res: Response): Promise<Response<User[]>> {
    try {
      const users = await this.findAllUsersUseCase.execute();
      if (!users) {
        return res.status(200).json([])
      }

      return res.status(200).json(users);
    } catch (error: any) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }
}