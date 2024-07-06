import { Router } from "express";
import { 
  createUserController,
  findAllUsersController, 
  loginController,
} from "./handler";
import { authMiddleware } from "../presentation";

export class Routes {
  public router: Router;

  constructor() {
    this.router = Router();
    this.userRoutesInitializate();
    this.authRouteInitialization();
  }

  userRoutesInitializate() {
    this.router.post('/user', (req, res) => (
      createUserController.handle(req, res)
    ))

    this.router.get('/users', authMiddleware, (req, res) => (
      findAllUsersController.handle(req, res)
    ))
  }

  authRouteInitialization() {
    this.router.post('/login', (req, res) => (
      loginController.handle(req, res)
    ))
  }
}
