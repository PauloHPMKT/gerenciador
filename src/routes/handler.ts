import { 
  Encripter, 
  UserMongoRepository,
  AuthImplementation
} from "../infra";
import { 
  CreateUserUseCase, 
  FindAllUsersUseCase, 
  LoginUseCase 
} from "../application/useCases";
import { 
  CreateUserController,
  FindAllUsersController,
  LoginController 
} from "../presentation"
import { ManagerActiveUserStatusController } from "../presentation/controllers/users/ManagetActiveUserStatus.controller";
import { ManagerActiveUserStatusUseCase } from "../application/useCases/users/ManagerActiveUserStatusUseCase";

const encript = new Encripter();
const authenticator = new AuthImplementation(encript);
const userMongoRepository = new UserMongoRepository();

const createUserUseCase = new CreateUserUseCase(userMongoRepository, encript);
const findAllUsersUseCase = new FindAllUsersUseCase(userMongoRepository);
const managerActiveUserStatusUseCase = new ManagerActiveUserStatusUseCase(userMongoRepository);

const loginUseCase = new LoginUseCase(userMongoRepository, authenticator);

const createUserController = new CreateUserController(createUserUseCase);
const findAllUsersController = new FindAllUsersController(findAllUsersUseCase);
const managerActiveUserStatusController = new ManagerActiveUserStatusController(managerActiveUserStatusUseCase);

const loginController = new LoginController(loginUseCase);

export {
  createUserController,
  findAllUsersController,
  managerActiveUserStatusController,
  loginController,
}