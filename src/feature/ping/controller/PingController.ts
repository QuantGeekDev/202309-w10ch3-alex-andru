import { type Request, type Response } from "express";

class PingController {
  getPing(req: Request, res: Response) {
    const pingMessage = "✅";
    res.status(200).send(pingMessage);
  }
}

export default PingController;
