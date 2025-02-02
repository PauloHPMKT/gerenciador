import { Request, Response } from "express";
import { User } from "../../../domain";
import { CreateUserUseCase } from "../../../application";

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response): Promise<Response<User>> {
    try {
      const { name, email, profession, registry, password, confirmPassword, role } = req.body;
  
      const user = {
        name,
        email,
        profession,
        registry,
        password,
        confirmPassword, 
        role,
      }
      const userCreated = await this.createUserUseCase.execute(user)
      return res.status(201).json(userCreated);
    } catch (error: any) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }
}
