import { User } from "domain/entities/User";
import { CreateUserDto } from "presentation/dto/CreateUserDto";

export interface UserRepository {
  create(user: CreateUserDto): Promise<User>;
}
