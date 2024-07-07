import jwt from 'jsonwebtoken';
import { User } from "../../domain/entities/User";
import { Authenticator } from "../../infra";
import { UserPayload, UserToken } from '../../presentation/dto/auth/UserTokenDto';
import { EncriptAdapter } from '../adapters/encriptAdapter/encript.adapter';
import { makeEnvConfigGlobal } from '../../presentation/config/envConfig.global';

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