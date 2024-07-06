import { Request, Response } from "express";
import { LoginUseCase } from "../../../application/useCases/auth/LoginUseCase";

export class LoginController {
  constructor(private readonly loginUseCase: LoginUseCase) {}

  async handle(req: Request, res: Response) {
    try {
      const { email, password } = req.body;
      const user = await this.loginUseCase.validateUser({ email, password });
      if (user) {
        const login = await this.loginUseCase.execute(user);
        return res.status(200).json(login);
      }

      return res.status(401).json({
        message: 'Unauthorized.'
      });
    } catch (error: any) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.'
      });  
    }
  }
}