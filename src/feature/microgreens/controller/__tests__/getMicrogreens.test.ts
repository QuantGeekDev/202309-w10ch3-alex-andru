import { type Response, type Request } from "express";
import MicrogreensController from "../MicrogreensController";
import { type MicrogreensRepository } from "../../../types";
import { microgreensMock } from "../../../mocks/microgreens/microgreensMock";

beforeEach(() => {
  jest.clearAllMocks();
});

describe("Given a MicrogreensController getMicrogreens method", () => {
  const req = {};
  const res: Pick<Response, "status" | "json"> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis(),
  };

  describe("When receives a request", () => {
    const microgreensRepository: Pick<MicrogreensRepository, "getMicrogreens"> =
      {
        getMicrogreens: jest
          .fn()
          .mockResolvedValue({ microgreens: microgreensMock }),
      };

    const microgreensController = new MicrogreensController(
      microgreensRepository as MicrogreensRepository,
    );

    test("Then it should call its method status(200)", async () => {
      const expectedStatusCode = 200;

      await microgreensController.getMicrogreens(
        req as Request,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with radish and broccoli micros", async () => {
      await microgreensController.getMicrogreens(
        req as Request,
        res as Response,
      );

      expect(res.json).toHaveBeenCalledWith({ microgreens: microgreensMock });
    });
  });

  describe("When it encounters an error", () => {
    const microgreensRepository: Pick<MicrogreensRepository, "getMicrogreens"> =
      {
        getMicrogreens: jest.fn().mockRejectedValue(new Error()),
      };

    const microgreensController = new MicrogreensController(
      microgreensRepository as MicrogreensRepository,
    );

    test("Then it should call its method status with code 501", async () => {
      const expectedStatusCode = 501;

      await microgreensController.getMicrogreens(
        req as Request,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its method json with error 'Error getting Microgreens from Database'", async () => {
      const expectedErrorMessage = {
        error: "Error getting microgreens from database",
      };

      await microgreensController.getMicrogreens(
        req as Request,
        res as Response,
      );

      expect(res.json).toHaveBeenCalledWith(expectedErrorMessage);
    });
  });
});
