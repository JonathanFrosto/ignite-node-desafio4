import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { BadRequest } from "../@shared/errors/BadRequest";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ email, name }: IRequest): User {
    const existentUser = this.usersRepository.findByEmail(email);

    if (existentUser) {
      throw new BadRequest("User email already exists");
    }

    return this.usersRepository.create({ email, name });
  }
}

export { CreateUserUseCase };
