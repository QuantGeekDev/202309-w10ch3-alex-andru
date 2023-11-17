import { Router } from "express";
import MicrogreensController from "./controller/MicrogreensController.js";
import MicrogreensMongooseRepository from "./repository/MicrogreensMongooseRepository.js";
const microgreensRouter = Router();
const microgreensRepository = new MicrogreensMongooseRepository();
const microgreensController = new MicrogreensController(microgreensRepository);

microgreensRouter.get("/", microgreensController.getMicrogreens);
microgreensRouter.get("/:id", microgreensController.getMicrogreenById);

export default microgreensRouter;
