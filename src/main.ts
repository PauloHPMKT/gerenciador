import { makeEnvConfigGlobal } from "./presentation/config/envConfig.global";
import { App } from "./App";

const app = new App();
const configService = makeEnvConfigGlobal();
const port = configService.getAppPort();

app.initServer(port);