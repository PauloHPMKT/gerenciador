export interface EnvConfigAdapter {
  getAppPort(): number;
  getDbHost(): string;
  getSecretKey(): string;
}