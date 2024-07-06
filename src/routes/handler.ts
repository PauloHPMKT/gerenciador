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

const encript = new Encripter();
const authenticator = new AuthImplementation(encript);
const userMongoRepository = new UserMongoRepository();

const createUserUseCase = new CreateUserUseCase(userMongoRepository, encript);
const findAllUsersUseCase = new FindAllUsersUseCase(userMongoRepository);

const loginUseCase = new LoginUseCase(userMongoRepository, authenticator);

const createUserController = new CreateUserController(createUserUseCase);
const findAllUsersController = new FindAllUsersController(findAllUsersUseCase);

const loginController = new LoginController(loginUseCase);

export {
  createUserController,
  findAllUsersController,
  loginController,
}