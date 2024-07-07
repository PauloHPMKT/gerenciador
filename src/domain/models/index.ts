import { User } from "../../domain";

export namespace UserModel {
  export type ToCreate = Omit<User, '_id' | 'avatar' | 'active' | 'createdAt'>;
  export type ToLogin = Omit<User, 'password' | 'confirmPassword'>;
}