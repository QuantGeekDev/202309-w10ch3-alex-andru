import { type Response, type Request } from "express";
import MicrogreensController from "./MicrogreensController";

describe("Given a MicrogreensController getMicrogreens method", () => {
  describe("When called", () => {
    test("Then it should call status(200) and call the json method", () => {
      const microgreensController = new MicrogreensController();
      const req = {};
      const expectedStatusCode = 200;

      const res: Pick<Response, "status" | "json"> = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };

      microgreensController.getMicrogreens(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(res.status(expectedStatusCode).json).toHaveBeenCalled();
    });
  });
});
