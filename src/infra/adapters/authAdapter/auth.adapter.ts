import { UserToken } from "../../../presentation/dto/auth/UserTokenDto";
import { User } from "../../../domain/entities/User";

export interface Authenticator {
  validatePassword(password: string, hash: string): Promise<boolean>;
  generateToken(user: User): UserToken;
}