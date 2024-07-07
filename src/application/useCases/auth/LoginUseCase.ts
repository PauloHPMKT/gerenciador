import { LoginAuthDto, UserToken } from "../../../presentation";
import { Authenticator } from "../../../infra";
import { UserRepository } from "../../../application";
import { User } from "../../../domain";

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
