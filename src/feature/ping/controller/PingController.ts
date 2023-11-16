import { type Request, type Response } from "express";

class PingController {
  getPing(req: Request, res: Response) {
    const ping = "✅";
    res.status(200).send(ping);
  }
}

export default PingController;
