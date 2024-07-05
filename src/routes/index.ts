import { Router } from "express";
import { createUserController } from "../presentation";

export class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routerInitializate()
  }

  routerInitializate() {
    this.router.post('/user', (req, res) => {
      return createUserController.handle(req, res)
    })
  }
}
