import { User } from "../../domain/entities/User";
import { UserRepository } from "../../application/repositories/user.repository";
import { userSchema } from "../../infra/schema/user.schema";
import { CreateUserDto } from "../../presentation/dto/users/CreateUserDto";

export class UserMongoRepository implements UserRepository {
  async create(user: CreateUserDto): Promise<User> {
    const newUser = await userSchema.create(user);
    return newUser.toObject() as User;
  }

  async findAll(): Promise<User[]> {
    const users = await userSchema.find();
    return users.map(user => user.toObject() as User);
  }

  async verify(data: Partial<User>): Promise<boolean> {
    const exists = await userSchema.exists(data);
    if (!exists) {
      return;
    }
    return true;
  }

  async findByEmail(email: string): Promise<User> {
    const user = await userSchema.findOne({ email });
    return user.toObject() as User;
  }

  async findById(id: string): Promise<User> {
    const user = await userSchema.findById(id);
    return user.toObject() as User;
  }

  async updateActiveStatus(id: string, status: boolean): Promise<void> {
    await userSchema.findByIdAndUpdate(
      { _id: id },
      { 
        $set: { active: status }
      }
    )
  }
}
