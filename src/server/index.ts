import morgan from "morgan";
import app from "./app.js";
import pingRouter from "../feature/ping/pingRouter.js";
import resourceNotFound from "./middlewares/errors/resourceNotFound.js";
import microgreensRouter from "../feature/microgreens/microgreensRouter.js";
import express from "express";

app.get("/", pingRouter);
app.use("/microgreens", microgreensRouter);

app.use(morgan("dev"));
app.use(express.json());
app.use(resourceNotFound);

app.disable("x-powered-by");
