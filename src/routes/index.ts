import { Router } from "express";
import { createUserController, findAllUsersController } from "../presentation";

export class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routerInitializate()
  }

  routerInitializate() {
    this.router.post('/user', (req, res) => (
      createUserController.handle(req, res)
    ))

    this.router.get('/users', (req, res) => (
      findAllUsersController.handle(req, res)
    ))
  }
}
