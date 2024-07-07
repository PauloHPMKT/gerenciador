import jwt from 'jsonwebtoken';
import { 
  UserPayload, 
  UserToken, 
  makeEnvConfigGlobal 
} from '../../presentation';
import { EncriptAdapter, Authenticator } from "../../infra";
import { User } from "../../domain";

export class AuthImplementation implements Authenticator {
  constructor(private readonly encripter: EncriptAdapter) {}

  validatePassword(password: string, hash: string): Promise<boolean> {
    return this.encripter.compare(password, hash);
  }

  generateToken(user: User): UserToken {
    const configService = makeEnvConfigGlobal();
    const secret = configService.getSecretKey();

    const payload: UserPayload = {
      sub: user._id,
      name: user.name,
      email: user.email,
      role: user.role,
      active: user.active,
    }
    
    const token = jwt.sign(
      payload, 
      secret, 
      {
        expiresIn: '1d',
      }
    );

    return {
      access_token: token,
    };
  }
}