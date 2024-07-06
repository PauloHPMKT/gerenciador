import { Encripter } from "../../../infra/encripter/bcrypt";
import { UserRepository } from "../../repositories/user.repository";
import { CreateUserDto } from "../../../presentation/dto/users/CreateUserDto";
import { User } from "../../../domain/entities/User";

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly criptPassword: Encripter,
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
      registry: body.registry,
      password,
      confirmPassword: password,
      role: body.role,
    });

    return this.userRepository.create(user);
  }
}
