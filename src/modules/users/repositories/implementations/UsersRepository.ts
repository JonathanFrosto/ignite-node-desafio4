import { v4 as uuid } from "uuid";

import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  create({ name, email }: ICreateUserDTO): User {
    const user = {
      id: uuid(),
      name,
      email,
      admin: false,
      updated_at: new Date(),
      created_at: new Date(),
    };

    this.users.push(user);
    return user;
  }

  findById(id: string): User | undefined {
    return this.users.find((user) => user.id === id);
  }

  findByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }

  turnAdmin(receivedUser: User): User {
    Object.assign(receivedUser, { admin: true });
    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
