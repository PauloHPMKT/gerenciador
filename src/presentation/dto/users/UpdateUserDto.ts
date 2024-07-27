import { Permission } from "../../../domain";
import { CreateUserDto } from "./CreateUserDto";

export class UpdateUserDto implements Partial<CreateUserDto> {
  public name: string;
  public email: string;
  public profession: string;
  public password: string;
  public role: Permission.Role;
}