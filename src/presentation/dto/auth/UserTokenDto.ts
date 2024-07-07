import { UserModel } from "../../../domain";

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