import { User } from "domain/entities/User";

export class CreateUserDto {
  public name: string;
  public email: string;
  public registry: string;
  public password: string;
  public confirmPassword: string; 
  public role: User.Role;
}