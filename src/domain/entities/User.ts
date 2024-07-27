import { randomBytes } from "crypto";
import { UserModel } from "../models";

export class User {
  public readonly _id: string;
  public name: string;
  public email: string;
  public profession: string;
  public registry: string;
  public password: string;
  public confirmPassword: string; 
  public role: Permission.Role;
  public active?: boolean;
  public avatar?: string; 
  public createdAt?: Date;

  constructor(props: UserModel.ToCreate, _id?: string) {
    Object.assign(this, props);
    this.active = this.active ?? true;
    this.avatar = this.avatar ?? null;
    this.createdAt = this.createdAt || new Date();
    this._id = _id || randomBytes(12).toString('hex');
  }
}

export namespace Permission {
  export type Role = 'admin' | 'user';
}
