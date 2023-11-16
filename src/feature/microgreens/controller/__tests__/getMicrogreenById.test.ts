import { type Request, type Response } from "express";
import { radishMicrosMock } from "../../../mocks/microgreens/microgreensMock";
import { type MicrogreensRepository } from "../../repository/types";
import MicrogreensController from "../MicrogreensController";

beforeEach(() => jest.clearAllMocks());

describe("Given MicrogreensController's getMicrogreenById method", () => {
  describe("When it receives a request with id '6555d6713fae3670216cb2af' ", () => {
    const microgreensRepository: Pick<
      MicrogreensRepository,
      "getMicrogreenById"
    > = {
      getMicrogreenById: jest.fn().mockResolvedValue(radishMicrosMock),
    };

    const microgreensController = new MicrogreensController(
      microgreensRepository as MicrogreensRepository,
    );

    const req: Partial<Request> = {
      params: { id: "6555d6713fae3670216cb2af" },
    };
    const res: Pick<Response, "json" | "status"> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis(),
    };

    test("Then it calls its method 'status' with code 200", async () => {
      const expectedSuccessStatusCode = 200;

      await microgreensController.getMicrogreenById(
        req as Request,
        res as Response,
      );

      expect(res.status).toHaveBeenCalledWith(expectedSuccessStatusCode);
    });

    test("Then it calls its method 'json' with a radish microgreen", async () => {
      const expectedMicrogreen = radishMicrosMock;

      await microgreensController.getMicrogreenById(
        req as Request,
        res as Response,
      );

      expect(res.json).toHaveBeenCalledWith(expectedMicrogreen);
    });
  });
});
