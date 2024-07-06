import { Encripter } from "../infra/encripter/bcrypt";
import { UserMongoRepository } from "../infra/repositories/user-mongo.repository";
import { CreateUserUseCase } from "../application/useCases/CreateUserUseCase";
import { FindAllUsersUseCase } from "../application/useCases/FindAllUsersUseCase";
import { CreateUserController } from "./controllers/CreateUser.controller";
import { FindAllUsersController } from "./controllers/FindAllUsers.controller";

const encript = new Encripter();
const userMongoRepository = new UserMongoRepository();
const createUserUseCase = new CreateUserUseCase(userMongoRepository, encript);
const findAllUsersUseCase = new FindAllUsersUseCase(userMongoRepository);

const createUserController = new CreateUserController(createUserUseCase);
const findAllUsersController = new FindAllUsersController(findAllUsersUseCase);

export {
  createUserController,
  findAllUsersController,
}