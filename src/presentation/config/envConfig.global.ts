import { EnvConfig } from "../../infra";

export const makeEnvConfigGlobal = (): EnvConfig => {
  const configService = new EnvConfig("development");
  return configService;
}
