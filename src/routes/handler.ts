import { 
  Encripter, 
  UserMongoRepository,
  AuthImplementation
} from "../infra";
import { 
  CreateUserUseCase, 
  FindAllUsersUseCase, 
  ManagerActiveUserStatusUseCase,
  LoginUseCase,
  UpdateUserAvatarUseCase,
  UpdateUserUseCase
} from "../application";
import { 
  CreateUserController,
  FindAllUsersController,
  ManagerActiveUserStatusController,
  LoginController,
  UpdateUserAvatarController,
  UpdateUserController
} from "../presentation"

const encript = new Encripter();
const authenticator = new AuthImplementation(encript);
const userMongoRepository = new UserMongoRepository();

const createUserUseCase = new CreateUserUseCase(userMongoRepository, encript);
const findAllUsersUseCase = new FindAllUsersUseCase(userMongoRepository);
const managerActiveUserStatusUseCase = new ManagerActiveUserStatusUseCase(userMongoRepository);
const updateUserAvatarUseCase = new UpdateUserAvatarUseCase(userMongoRepository);
const updateUserUseCase = new UpdateUserUseCase(userMongoRepository);

const loginUseCase = new LoginUseCase(userMongoRepository, authenticator);

const createUserController = new CreateUserController(createUserUseCase);
const findAllUsersController = new FindAllUsersController(findAllUsersUseCase);
const managerActiveUserStatusController = new ManagerActiveUserStatusController(managerActiveUserStatusUseCase);
const updateUserAvatarController = new UpdateUserAvatarController(updateUserAvatarUseCase);
const updateUserController = new UpdateUserController(updateUserUseCase);

const loginController = new LoginController(loginUseCase);

export {
  createUserController,
  findAllUsersController,
  managerActiveUserStatusController,
  loginController,
  updateUserAvatarController,
  updateUserController
}