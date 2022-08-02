import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { NotFound } from "../@shared/errors/Notfound";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.usersRepository.findById(user_id);

    if (!user) {
      throw new NotFound("User not found");
    }

    return user;
  }
}

export { ShowUserProfileUseCase };
