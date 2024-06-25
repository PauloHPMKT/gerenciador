import express, { Application } from "express";

export class App {
  private app: Application;

  constructor() {
    this.app = express();
  }

  initServer(port: number) {
    this.app.listen(port, () => {
      console.log(`Server is running on http://localhost:${port}`)
    })
  }
}
