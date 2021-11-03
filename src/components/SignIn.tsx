import React, { useContext } from "react";
import { SignInContext } from "../context/SignInContext";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignInContextType } from "../context/SignInContextType";

const schema = yup.object().shape({
  username: yup.string().required("Tarefa inválida"),
  password: yup.string().required("Tarefa inválida"),
  confirmPassword: yup.string().required("Tarefa inválida"),
});

interface AddUserForm {
  username: string;
  password: string;
}

const SignIn = () => {
  const { addUser } = useContext<SignInContextType>(SignInContext);
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: AddUserForm) => {
    addUser(data.username, data.password);
    window.location.href = "/listLead";
  };

  return (
    <form className="uk-form" onSubmit={handleSubmit<AddUserForm>(onSubmit)}>
      <div className="uk-margin ">
        <caption>Usuário*</caption>
        <input
          type="text"
          id="username"
          placeholder="nome de usuário"
          className="uk-input"
          {...register("username")}
        />
        <caption>Senha*</caption>
        <input
          type="password"
          id="password"
          placeholder="senha"
          className="uk-input"
          {...register("username")}
        />
        <caption>Confirmação de senha*</caption>
        <input
          type="password"
          id="confirmPassword"
          placeholder="confirme a senha"
          className="uk-input"
        />
      </div>
      <div className="uk-width-1-1">
        <button
          type="submit"
          className="uk-button uk-button-primary uk-margin"
          onClick={handleSubmit<AddUserForm>(onSubmit)}
        >
          Registrar
        </button>
      </div>
    </form>
  );
};

export default SignIn;
