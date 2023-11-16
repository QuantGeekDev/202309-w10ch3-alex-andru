import express from "express";
import "dotenv/config";
import chalk from "chalk";

const app = express();
const port = process.env.PORT ?? 1337;

export const startServer = (port: string) => {
  app.listen(port);
  console.log(
    chalk.greenBright.bold(
      `Server launched on ${chalk.yellow(`http://127.0.0.1:${port}`)}`,
    ),
  );
};

export default app;
