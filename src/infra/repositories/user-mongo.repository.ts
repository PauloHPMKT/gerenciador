import { UserRepository } from "domain/repositories/user.repository";
import { userSchema } from "../../infra/schema/user.schema";
import { CreateUserDto } from "presentation/dto/CreateUserDto";
import { User } from "domain/entities/User";

export class UserMongoRepository implements UserRepository {
  async create(user: CreateUserDto): Promise<User> {
    const newUser = await userSchema.create(user);
    return newUser.toObject() as User;
  }
}
