import { User } from "domain/entities/User";

export interface UserToken {
  access_token: string;
  user?: Omit<User, 'password'| 'confirmPassword'>;
}

export interface UserPayload {
  sub: string;
  name: string;
  email: string;
  role: string;
  active: boolean;
}