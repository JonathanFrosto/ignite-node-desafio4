import { Request, Response } from "express";

import ResolverErrors from "../@shared/errors/ResolverErrors";
import { TurnUserAdminUseCase } from "./TurnUserAdminUseCase";

class TurnUserAdminController {
  constructor(private turnUserAdminUseCase: TurnUserAdminUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      return response.json(this.turnUserAdminUseCase.execute({ user_id }));
    } catch (e) {
      return ResolverErrors.resolve(e, response);
    }
  }
}

export { TurnUserAdminController };
