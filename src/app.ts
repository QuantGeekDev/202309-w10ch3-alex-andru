import express from "express";
import "dotenv/config";
import chalk from "chalk";

const app = express();
const port = process.env.PORT ?? 1337;

console.log(
  chalk.greenBright.bold(
    `Server launched on ${chalk.yellow(`http://127.0.0.1:${port}`)}`
  )
);
app.listen(port);

export default app;
