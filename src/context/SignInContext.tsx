import React, { createContext, useEffect, useState } from "react";
import { User } from "../models/User";
import { get, save } from "../services/UserService";
import { SignInContextType } from "./SignInContextType";

export const SignInContext = createContext<SignInContextType>({
  users: [],
  addUser: () => {},
});

const SignInProvider = (props: any) => {
  const [users, setUsers] = useState<User[]>(get);

  useEffect(() => {
    save(users);
  }, [users]);

  const addUser = (username: string, password: string) => {
    const user: User = {
      username,
      password,
    };
    setUsers([...users, user]);
  };


  return (
    <SignInContext.Provider value={{ users, addUser }}>
      {props.children}
    </SignInContext.Provider>
  );
};

export default SignInProvider;
