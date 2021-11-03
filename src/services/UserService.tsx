import { User } from "../models/User";

const USER_STORE = "users";

export const get = (): User[] => {
  const data = localStorage.getItem(USER_STORE) || "";
  try {
    const result = JSON.parse(data) as User[];
    return result;
  } catch {
    return [];
  }
};

export const save = (data: User[]) => {
  if (data?.length >= 1) localStorage.setItem(USER_STORE, JSON.stringify(data));
};
