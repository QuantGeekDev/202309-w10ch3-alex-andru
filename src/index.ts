import "./server/index.js";
import { startServer } from "./server/app.js";
import chalk from "chalk";

const port = process.env.PORT;

if (!port) {
  console.log(chalk.red("Port not defined"));
  process.exit();
}

startServer(port);
