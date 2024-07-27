import { UserRepository } from "../../../application";
import { CreateUserDto } from "../../../presentation";
import { EncriptAdapter } from "../../../infra";
import { User } from "../../../domain";

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly criptPassword: EncriptAdapter,
  ) {}

  async execute(body: CreateUserDto) {
    const existingUser = await this.userRepository.verify({ email: body.email });
    if (existingUser) {
      throw new Error('User already exists');
    }

    if (body.password !== body.confirmPassword) {
      throw new Error('Senha e confirmação de senha não são iguais');
    }

    const password = await this.criptPassword.encrypt(body.password);
    const user = new User({
      name: body.name,
      email: body.email,
      profession: body.profession,
      registry: body.registry,
      password,
      confirmPassword: password,
      role: body.role,
    });

    return this.userRepository.create(user);
  }
}
