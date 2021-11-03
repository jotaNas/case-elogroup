import React, { useContext } from "react";
import { LeadContext } from "../context/LeadContext";
import { LeadContextType } from "../context/LeadContextType";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import OportunitiesList from "./OportunitiesList";

const schema = yup.object().shape({
  name: yup.string().required("O nome deve ser inserido"),
  phone: yup.string().required("Tarefa inválida"),
  email: yup.string().required("Tarefa inválida"),
});

interface AddLeadForm {
  name: string;
  phone: string;
  email: string;
}

const AddLead = () => {
  const { addLead } = useContext<LeadContextType>(LeadContext);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: AddLeadForm) => {
    addLead(data.name, data.phone, data.email);
    alert("Lead cadastrada com sucesso");
    window.location.href = "/";
  };

  return (
    <form className="uk-form" onSubmit={handleSubmit<AddLeadForm>(onSubmit)}>
      <h4>Novo Lead</h4>
      <section className="uk-grid uk-grid-column-large">
        <div className="uk-margin ">
          <caption>Nome*</caption>
          <input
            type="text"
            id="name"
            placeholder="Nome"
            className="uk-input"
            {...register("name")}
          />
          <span>
            <small>
              <strong className="uk-text-danger">{errors.name?.message}</strong>
            </small>
          </span>
          <caption>Telefone*</caption>
          <input
            type="text"
            id="phone"
            placeholder="Telefone"
            className="uk-input"
            {...register("phone")}
          />
          <span>
            <small>
              <strong className="uk-text-danger">
                {errors.phone?.message}
              </strong>
            </small>
          </span>
          <caption>Email*</caption>
          <input
            type="text"
            id="email"
            placeholder="Email"
            className="uk-input"
            {...register("email")}
          />
          <span>
            <small>
              <strong className="uk-text-danger">
                {errors.email?.message}
              </strong>
            </small>
          </span>
        </div>
        <OportunitiesList></OportunitiesList>
      </section>

      <div className="uk-width-1-1">
        <button
          type="submit"
          className="uk-button uk-button-danger uk-margin"
          onClick={handleSubmit<AddLeadForm>(onSubmit)}
        >
          Salvar
        </button>
      </div>
    </form>
  );
};

export default AddLead;
