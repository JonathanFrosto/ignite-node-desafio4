import { Request, Response } from "express";

import ResolverErrors from "../@shared/errors/ResolverErrors";
import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    let { user_id } = request.headers;
    user_id = <string>user_id;

    try {
      return response.json(this.listAllUsersUseCase.execute({ user_id }));
    } catch (e) {
      return ResolverErrors.resolve(e, response);
    }
  }
}

export { ListAllUsersController };
