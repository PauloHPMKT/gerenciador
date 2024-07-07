import express, {
  Application, 
  json, 
  urlencoded 
} from "express";
import cors from "cors";
import morgan from "morgan";
import { Routes } from "./routes";
import { dbConnection } from "./infra/db";
import { EnvConfig } from "./infra/envconfig/envconfig";

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
    const middlewares = [
      json(),
      urlencoded({ extended: true }),
      cors(),
      morgan('dev')
    ]

    middlewares.forEach(middleware => this.app.use(middleware))
  }

  initRoutes() {
    this.app.use(this.routes.router)
  }

  initServer(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`)
    })
  }
}
