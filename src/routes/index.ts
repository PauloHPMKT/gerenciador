import { Router } from "express";
import { 
  createUserController,
  findAllUsersController, 
  loginController,
  managerActiveUserStatusController,
  updateUserAvatarController,
  updateUserController
} from "./handler";
import { authMiddleware, upload } from "../presentation";

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

    this.router.patch('/user/:id/status', authMiddleware, (req, res) => (
      managerActiveUserStatusController.handle(req, res)
    ))

    this.router.patch(
      '/user/avatar/:id', 
      authMiddleware, 
      upload.single('avatar'), 
      (req, res) => (updateUserAvatarController.handle(req, res)
    ))

    this.router.patch('/user/:id', authMiddleware, (req, res) => (
      updateUserController.handle(req, res)
    ))
  }

  authRouteInitialization() {
    this.router.post('/login', (req, res) => (
      loginController.handle(req, res)
    ))
  }
}
