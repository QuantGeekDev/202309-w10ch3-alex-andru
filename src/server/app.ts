import express from "express";
import "dotenv/config";
import chalk from "chalk";

const app = express();

export const startServer = (port: number) => {
  app.listen(port);

  const serverUrl = chalk.yellow(`http://127.0.0.1:${port}`);

  console.log(chalk.greenBright.bold(`Server launched on ${serverUrl}`));
};

export default app;
