import express, { Application } from "express";
import { Routes } from "./routes";
import { dbConnection } from "./infra/db";

export class App {
  private app: Application;
  public readonly routes = new Routes();

  constructor() {
    this.app = express();
    this.setMiddlewares();
    this.initRoutes();
    dbConnection();
  }

  setMiddlewares() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
  }

  initRoutes() {
    this.app.use('/', this.routes.router)
  }

  initServer(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`)
    })
  }
}
