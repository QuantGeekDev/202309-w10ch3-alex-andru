import "./server/index.js";
import { startServer } from "./server/app.js";
import chalk from "chalk";

const port = process.env.PORT;

if (!port) {
  console.log(chalk.red.bold.bgYellowBright("Port not defined, shutting down"));
  process.exit();
}

startServer(port);
