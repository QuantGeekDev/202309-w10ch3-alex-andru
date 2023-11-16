import { Router } from "express";
import MicrogreensController from "../../feature/microgreens/controller/MicrogreensController.js";

const microgreensRouter = Router();
const microgreensController = new MicrogreensController();

microgreensRouter.get("/", microgreensController.getMicrogreens);

export default microgreensRouter;
