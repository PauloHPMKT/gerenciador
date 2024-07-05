import { Encripter } from "../../infra/encripter/bcrypt";
import { UserRepository } from "../../domain/repositories/user.repository";
import { CreateUserDto } from "../../presentation/dto/CreateUserDto";
import { User } from "../../domain/entities/User";

export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly criptPassword: Encripter,
  ) {}

  async execute(body: CreateUserDto) {
    // verificar se o usuário já existe

    // criptografar a senha 
    const password = await this.criptPassword.encrypt(body.password);

    const user = new User({
      name: body.name,
      email: body.email,
      registry: body.registry,
      password,
      confirmPassword: body.confirmPassword,
    })

    // verificar se a senha e a confirmação de senha são iguais

    // criar o usuário
    return this.userRepository.create(user);
  }
}
