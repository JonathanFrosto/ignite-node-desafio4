import { Response } from "express";

export default class ResolverErrors {
  static resolve(e, response: Response): Response {
    if (!e.statusCode) {
      return response.status(500).json({ error: e.message });
    }

    return response.status(e.statusCode).json({ error: e.message });
  }
}
