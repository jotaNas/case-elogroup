import { User } from "../models/User";

export interface SignInContextType {
  users: User[];
  addUser(username: string, password: string): void;
}
