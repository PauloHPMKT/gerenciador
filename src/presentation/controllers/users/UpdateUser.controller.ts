import { Request, Response } from "express";
import { UpdateUserUseCase } from "../../../application";

export class UpdateUserController {
  constructor(private readonly updateUserUseCase: UpdateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const { name, email, profession, registry, password, confirmPassword, role } = req.body;

    try {
      const user = {
        name,
        email,
        profession,
        password,
        role,
      }
      const userUpdated = await this.updateUserUseCase.execute(id, user);
      return res.status(200).json(userUpdated);
    } catch (error: any) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }
}