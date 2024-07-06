import jwt from 'jsonwebtoken';
import { User } from "../../domain/entities/User";
import { Authenticator, Encripter } from "../../infra";
import { UserPayload, UserToken } from '../../presentation/dto/auth/UserTokenDto';

export class AuthImplementation implements Authenticator {
  constructor(private readonly encripter: Encripter) {}

  validatePassword(password: string, hash: string): Promise<boolean> {
    return this.encripter.compare(password, hash);
  }

  generateToken(user: User): UserToken {
    const secret = '123!@#456$%¨879&*(0';

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