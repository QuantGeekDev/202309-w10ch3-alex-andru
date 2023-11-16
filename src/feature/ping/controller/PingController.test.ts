import { type Request, type Response } from "express";
import PingController from "./PingController";

describe("Given a PingController method getPing", () => {
  describe("When getPing is called", () => {
    test("Then the method is called with status code 200 and ", () => {
      const pingController = new PingController();

      const expectedStatusCode = 200;
      const expectedMessage = "✅";

      const req = {};

      const res: Pick<Response, "send" | "status"> = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn(),
      };

      pingController.getPing(req as Request, res as Response);

      expect(res.status(expectedStatusCode).send).toHaveBeenCalledWith(
        expectedMessage,
      );
    });
  });
});
