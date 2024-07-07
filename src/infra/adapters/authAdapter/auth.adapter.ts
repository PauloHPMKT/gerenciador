import { UserToken } from "../../../presentation";
import { User } from "../../../domain";

export interface Authenticator {
  validatePassword(password: string, hash: string): Promise<boolean>;
  generateToken(user: User): UserToken;
}