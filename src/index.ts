import "./server/index.js";
import { startServer } from "./server/app.js";
import chalk from "chalk";
import connectToDatabase from "./database/index.js";

console.log(chalk.cyan("Initializing application"));

const dbUrl = process.env.MONGO_URL;

if (!dbUrl) {
  console.log(chalk.red("Database URL not defined, shutting down"));
  process.exit();
}

await connectToDatabase(dbUrl);

const port = process.env.PORT ?? 3000;

if (!port) {
  console.log(chalk.red.bold.bgYellowBright("Port not defined, shutting down"));
  process.exit();
}

startServer(+port);
