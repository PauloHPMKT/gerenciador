import { User } from "../../domain";
import { CreateUserDto, UpdateUserAvatarDto, UpdateUserDto } from "../../presentation";

export interface UserRepository {
  create(user: CreateUserDto): Promise<User>;
  findAll(): Promise<User[]>;
  verify(data: Partial<User>): Promise<boolean>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  updateActiveStatus(id: string, status: boolean): Promise<void>;
  updateUserAvatar({ id, avatar }: UpdateUserAvatarDto): Promise<void>;
  updateUser(id: string, user: Partial<UpdateUserDto>): Promise<void>;
}
