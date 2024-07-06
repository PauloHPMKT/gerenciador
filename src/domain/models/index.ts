import { User } from "../entities/User";

export namespace UserModel {
  export type ToCreate = Omit<User, '_id' | 'avatar' | 'active' | 'createdAt'>;
  export type ToLogin = Omit<User, 'password' | 'confirmPassword'>;
}