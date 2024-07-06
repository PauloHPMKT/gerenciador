import { Authenticator } from "../../../infra/adapters/authAdapter/auth.adapter";
import { UserRepository } from "../../../application/repositories/user.repository";
import { LoginAuthDto } from "../../../presentation/dto/auth/LoginAuthDto";
import { User } from "../../../domain/entities/User";
import { UserToken } from "../../../presentation/dto/auth/UserTokenDto";

export class LoginUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly authenticator: Authenticator,
  ) {}

  async validateUser({ email, password }: LoginAuthDto): Promise<User> {
    const user = await this.userRepository.findByEmail(email);
    if (user && !user.active) {
      throw new Error('User is not active.');
    }

    const passwordMatch = await this.authenticator.validatePassword(
      password, user.password
    );
    if (passwordMatch) return user;
    
    throw new Error('Uncorrect data to validade user.');
  }

  async execute(user: User): Promise<UserToken> {
    const { access_token } = this.authenticator.generateToken(user)
    const { password, confirmPassword, ...userWithoutPassword } = user;
    
    return {
      access_token,
      user: userWithoutPassword,
    };
  }
}
