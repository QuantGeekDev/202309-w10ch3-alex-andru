import morgan from "morgan";
import app from "./app.js";
import pingRouter from "../feature/ping/pingRouter.js";
import resourceNotFound from "./middlewares/errors/resourceNotFound.js";
import microgreensRouter from "../feature/microgreens/microgreensRouter.js";

app.use(morgan("dev"));
app.get("/", pingRouter);
app.use("/microgreens", microgreensRouter);
app.use(resourceNotFound);
