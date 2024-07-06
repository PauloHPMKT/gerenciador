import { UserModel } from "../../../domain/models";
import { User } from "../../../domain/entities/User";

export interface UserToken {
  access_token: string;
  user?: UserModel.ToLogin;
}

export interface UserPayload {
  sub: string;
  name: string;
  email: string;
  role: string;
  active: boolean;
}