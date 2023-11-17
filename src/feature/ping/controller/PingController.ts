import { type Request, type Response } from "express";

class PingController {
  getPing(_req: Request, res: Response) {
    const pingMessage = "✅";
    res.status(200).send(pingMessage);
  }
}

export default PingController;
