import { Request, Response } from "express";
import { CreateUserUseCase } from "../../application/useCases/CreateUserUseCase";

export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  async handle(req: Request, res: Response) {
    const { name, email, registry, password, confirmPassword } = req.body;

    const user = {
      name,
      email,
      registry,
      password,
      confirmPassword, 
    }
    const userCreated = await this.createUserUseCase.execute(user)
    return res.status(201).json(userCreated);
  }
}
