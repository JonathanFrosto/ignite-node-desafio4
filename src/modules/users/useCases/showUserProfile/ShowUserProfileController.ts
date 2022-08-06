import { Request, Response } from "express";

import ResolverErrors from "../@shared/errors/ResolverErrors";
import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    try {
      return response.json(this.showUserProfileUseCase.execute({ user_id }));
    } catch (e) {
      return ResolverErrors.resolve(e, response);
    }
  }
}

export { ShowUserProfileController };
