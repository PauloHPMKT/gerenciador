import { EnvConfig } from "../../infra/envconfig/envconfig";

export const makeEnvConfigGlobal = (): EnvConfig => {
  const configService = new EnvConfig("development");
  return configService;
}
