import * as dotenv from "dotenv";
import { join } from "node:path";
import { EnvConfigAdapter } from "../../infra";

export class EnvConfig implements EnvConfigAdapter {
  constructor(private readonly environment?: string) {
    this.envPathConstruct(this.environment);
  }

  private envPathConstruct(environment?: string) {
    const envFile = !environment ? '.env' : `.env.${environment}`;
    dotenv.config({
      path: join(__dirname, `../../../${envFile}`)
    });
  }

  getAppPort(): number {
    return Number(process.env.PORT);
  }

  getDbHost(): string {
    return process.env.DB_HOST as string;
  }

  getSecretKey(): string {
    return process.env.SECRET_KEY as string;
  }
}
