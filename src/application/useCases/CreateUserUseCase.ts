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
    // const existingUser = await this.userRepository.findByEmail(body.email);
    // if (existingUser) {
    //   throw new Error('User already exists');
    // }

    // verificar e criptografar a senha 
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

    // criar o usuário
    return this.userRepository.create(user);
  }
}
