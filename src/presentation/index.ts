import { UserMongoRepository } from "../infra/repositories/user-mongo.repository";
import { CreateUserUseCase } from "../application/useCases/CreateUserUseCase";
import { CreateUserController } from "./controllers/CreateUser.controller";
import { Encripter } from "../infra/encripter/bcrypt";

const userMongoRepository = new UserMongoRepository();
const encript = new Encripter();
const createUserUseCase = new CreateUserUseCase(userMongoRepository, encript);

const createUserController = new CreateUserController(createUserUseCase);

export {
  createUserController,
}