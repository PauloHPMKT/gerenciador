import { randomBytes } from "crypto";

export class User {
  public readonly _id: string;
  public name: string;
  public email: string;
  public registry: string;
  public password: string;
  public confirmPassword: string; 
  public role: User.Role;
  public avatar?: string; 
  public createdAt?: Date;

  constructor(props: Omit<User, '_id' | 'avatar' | 'createdAt'>, _id?: string) {
    Object.assign(this, props);
    this.createdAt = this.createdAt || new Date();
    this.avatar = this.avatar ?? null;
    this._id = _id || randomBytes(12).toString('hex');
  }
}

export namespace User {
  export type Role = 'admin' | 'user';
}
