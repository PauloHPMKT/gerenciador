import { User } from "../../domain/entities/User";
import { CreateUserDto } from "../../presentation/dto/users/CreateUserDto";

export interface UserRepository {
  create(user: CreateUserDto): Promise<User>;
  findAll(): Promise<User[]>;
  verify(data: Partial<User>): Promise<boolean>;
  findByEmail(email: string): Promise<User>;
}
