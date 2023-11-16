import express from "express";
import "dotenv/config";
import chalk from "chalk";
import pingRouter from "./router/pingRouter.js";
import resourceNotFound from "./middlewares/errors/resourceNotFound.js";

const app = express();
const port = process.env.PORT ?? 1337;

app.get("/", pingRouter);
app.use(resourceNotFound);

console.log(
  chalk.greenBright.bold(
    `Server launched on ${chalk.yellow(`http://127.0.0.1:${port}`)}`,
  ),
);
app.listen(port);

export default app;
