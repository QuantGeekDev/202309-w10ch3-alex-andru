import { type Request, type Response } from "express";
import PingController from "./PingController";

describe("Given a PingController method getPing", () => {
  describe("When getPing is called", () => {
    test("Then the method is called with status code 200 and ", () => {
      const pingController = new PingController();

      const expectedStatusCode = 200;
      const expectedMessage = "✅";
      const req = {};

      const res: Pick<Response, "json" | "status"> = {
        status: jest.fn().mockReturnValue({ json: jest.fn() }),
        json: jest.fn(),
      };

      pingController.getPing(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
      expect(res.status(200).json).toHaveBeenCalledWith({
        message: expectedMessage,
      });
    });
  });
});
