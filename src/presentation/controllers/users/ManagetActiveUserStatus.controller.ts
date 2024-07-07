import { Request, Response } from "express";
import { 
  ManagerActiveUserStatusUseCase 
} from "../../../application/useCases/users/ManagerActiveUserStatusUseCase";

export class ManagerActiveUserStatusController {
  constructor(
    private readonly managerActiveUserStatusUseCase: ManagerActiveUserStatusUseCase,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const { active } = req.body;

      const updatedStatus = await this.managerActiveUserStatusUseCase.execute(
        id, active
      );

      return res.status(200).json(updatedStatus);
    } catch (error: any) {
      return res.status(400).json({
        message: error.message || 'Unexpected error.'
      });
    }
  }
}