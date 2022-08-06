import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { BadRequest } from "../@shared/errors/BadRequest";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const requestedByUser = this.usersRepository.findById(user_id);

    if (!requestedByUser || !requestedByUser.admin) {
      throw new BadRequest("Non-admin user");
    }

    return this.usersRepository.list();
  }
}

export { ListAllUsersUseCase };
