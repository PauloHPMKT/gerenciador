import { User } from "../../domain/entities/User";
import { UserRepository } from "../../domain/repositories/user.repository";
import { userSchema } from "../../infra/schema/user.schema";
import { CreateUserDto } from "presentation/dto/CreateUserDto";

export class UserMongoRepository implements UserRepository {
  async create(user: CreateUserDto): Promise<User> {
    const newUser = await userSchema.create(user);
    return newUser.toObject() as User;
  }

  async findAll(): Promise<User[]> {
    const users = await userSchema.find();
    return users.map(user => user.toObject() as User);
  }
}
